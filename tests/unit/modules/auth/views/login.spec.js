import { shallowMount } from '@vue/test-utils'
import Login from '@/modules/auth/views/Login.vue'

import createVuexStore from '../../../mock-data/mock-store'

import Swal from 'sweetalert2'

jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
    showLoading: jest.fn(),
    close: jest.fn()
}))

describe('Pruebas en el Login Component', () => {

    const store = createVuexStore({
        status: 'not-authenticated', // 'authenticated', 'not-authenticated', 'authenticating'
        user: null,
        idToken: null,
        refreshToken: null
    })

    store.dispatch = jest.fn()

    beforeEach(() => jest.clearAllMocks() )

    test('Debe de hacer match con el snapshot', () => {

        const wrapper = shallowMount( Login, {
            global: {
                plugins: [ store ]
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()

    })

    test('Credenciales incorrectas, disparar error de SweetAlert', async() => {

        store.dispatch.mockReturnValueOnce({ ok: false, message: 'Credenciales incorrectas'})

        const wrapper = shallowMount( Login, {
            global: {
                plugins: [ store ]
            }
        })

        await wrapper.find('form').trigger('submit')
        expect( store.dispatch ).toHaveBeenCalledWith('auth/signInUser', { 'email': '', 'password': '' })
        expect( Swal.fire ).toHaveBeenCalledWith( 'Error', 'Credenciales incorrectas', 'error' )

    })
    
    test('Debe de redirigir a la ruta no-entry cuando las credenciales sean correctas', async() => {

        store.dispatch.mockReturnValueOnce({ ok: true })

        const wrapper = shallowMount( Login, {
            global: {
                plugins: [ store ]
            }
        })

        const [ txtEmail, txtPassword ] = wrapper.findAll('input')
        await txtEmail.setValue('guillermo@gmail.com')
        await txtPassword.setValue('123456')

        await wrapper.find('form').trigger('submit')
        
        expect( store.dispatch ).toHaveBeenCalledWith('auth/signInUser', { 'email': 'guillermo@gmail.com', 'password': '123456' })
        expect( wrapper.router.push ).toHaveBeenCalledWith({ 'name': 'no-entry' })

    })

})