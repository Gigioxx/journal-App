import { shallowMount } from '@vue/test-utils'
import Login from '@/modules/auth/views/Login.vue'

import createVuexStore from '../../../mock-data/mock-store'


describe('Pruebas en el Login Component', () => {

    const store = createVuexStore({
        status: 'not-authenticated', // 'authenticated', 'not-authenticated', 'authenticating'
        user: null,
        idToken: null,
        refreshToken: null
    })

    beforeEach(() => jest.clearAllMocks() )

    test('Debe de hacer match con el snapshot', () => {

        const wrapper = shallowMount( Login, {
            global: {
                plugins: [ store ]
            }
        } )

        expect( wrapper.html() ).toMatchSnapshot()

    })

})