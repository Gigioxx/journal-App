import useAuth from '@/modules/auth/composables/useAuth'

const mockStore = {
    dispatch: jest.fn(),
    // Commit
    // Getters
}

jest.mock('vuex', () => ({
    useStore: () => mockStore
}))

describe('Pruebas en useAuth', () => {

    beforeEach(() => jest.clearAllMocks() )

    test('createUser - Successful', async() => {

        const { createUser } = useAuth()

        const newUser = { name: 'Guillermo', email: 'guillermo@gmail.com' }

        mockStore.dispatch.mockReturnValue({ ok: true })

        const resp = await createUser( newUser )

        expect( mockStore.dispatch ).toHaveBeenCalledWith('auth/createUser', { email: 'guillermo@gmail.com', name: 'Guillermo' })

        expect( resp ).toEqual({ ok: true })

    })

})