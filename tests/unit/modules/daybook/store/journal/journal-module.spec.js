import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal'

const createVuexStore = ( initialState ) =>
    createStore({
        modules: {
            journal: {
                ...journal,
                state: { ...initialState }
            }
        }
    })

describe('Vuex - Pruebas en el Journal Module', () => {

    //Básicas
    test('Debe de tener este State', () => {
        
    })

    test('en', () => {
        
    })

    test('en', () => {
        
    })

})