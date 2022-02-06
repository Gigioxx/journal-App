import createVuexStore from '../../../mock-data/mock-store'

describe('Vuex: Pruebas en el auth-module', () => {

    test('Estado inicial', () => {
        
        const store = createVuexStore({
            status: 'authenticating', // 'authenticated', 'not-authenticated', 'authenticating'
            user: null,
            idToken: null,
            refreshToken: null
        })
        
        const { status, user, idToken, refreshToken } = store.state.auth
        expect(status).toBe( 'authenticating' )
        expect(user).toBe( null )
        expect(idToken).toBe( null )
        expect(refreshToken).toBe( null )
    })

    // Mutations
    test('Mutation: loginUser', () => {

        const store = createVuexStore({
            status: 'authenticating', // 'authenticated', 'not-authenticated', 'authenticating'
            user: null,
            idToken: null,
            refreshToken: null
        })

        const payload = {
            user: { name: 'Guillermo', email: 'guillermo@gmail.com' },
            idToken: 'ABC-123',
            refreshToken: 'XYZ-123'
        }

        store.commit('auth/loginUser', payload)

        const { status, user, idToken, refreshToken } = store.state.auth
        expect(status).toBe( 'authenticated' )
        expect(user).toEqual({ name: 'Guillermo', email: 'guillermo@gmail.com' })
        expect(idToken).toBe( 'ABC-123' )
        expect(refreshToken).toBe( 'XYZ-123' )
        
    })

})