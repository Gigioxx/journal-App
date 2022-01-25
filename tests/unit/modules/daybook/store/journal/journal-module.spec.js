import { createStore } from 'vuex'
import journal from '@/modules/daybook/store/journal'
import { journalState } from '../../../../mock-data/test-journal-state'

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
        
        const store = createVuexStore( journalState )
        const { isLoading, entries } = store.state.journal

        expect( isLoading ).toBeFalsy()
        expect( entries ).toEqual( journalState.entries )

    })

    //Mutations
    test('mutation: setEntries', () => {
        
        const store = createVuexStore({ isLoading: true, entries: [] })

        store.commit('journal/setEntries', journalState.entries )

        expect( store.state.journal.entries.length ).toBe(2)
        expect( store.state.journal.isLoading ).toBeFalsy()

    })

    test('mutation: updateEntry', () => {
        
        const store = createVuexStore( journalState )

        const updatedEntry = {
            id: 'MtyDhSnxcjRMq9xNzBG',
            date : 1642795283553,            
            text : 'Hola mundo desde pruebas'
        }

        store.commit('journal/updateEntry', updatedEntry)

        const storeEntries = store.state.journal.entries

        expect( storeEntries.length ).toBe(2)
        expect(
            storeEntries.find( e => e.id === updatedEntry.id )
        ).toEqual( updatedEntry )

    })

    test('mutation: createEntry deleteEntry', () => {

        const store = createVuexStore( journalState )

        store.commit('journal/createEntry', { id: 'ABC-123', text: 'Hola Mundo' })

        const stateEntries = store.state.journal.entries

        expect( stateEntries.length ).toBe(3)
        expect( stateEntries.find( e => e.id === 'ABC-123' ) ).toBeTruthy()

        store.commit('journal/deleteEntry', 'ABC-123')

        expect( store.state.journal.entries.length ).toBe(2)
        expect( store.state.journal.entries.find( e => e.id === 'ABC-123' ) ).toBeFalsy()

    })

    //Getters

    test('getters: getEntriesByTerm getEntryById', () => {

        const store = createVuexStore( journalState )

        const [ entry1, entry2 ] = journalState.entries

        expect( store.getters['journal/getEntriesByTerm']('').length ).toBe(2)
        expect( store.getters['journal/getEntriesByTerm']('es').length ).toBe(1)

        expect( store.getters['journal/getEntriesByTerm']('es') ).toEqual([ entry1 ])
        expect( store.getters['journal/getEntryById']('-MtyY5gkXcOA33Si47NG') ).toEqual( entry2 )

    })

    //actions

    test('', () => {

        

    })

})