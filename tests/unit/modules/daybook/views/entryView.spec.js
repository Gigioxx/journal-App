import { shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'

import journal from '@/modules/daybook/store/journal'
import { journalState } from '../../../mock-data/test-journal-state'

import EntryView from '@/modules/daybook/views/EntryView'

const createVuexStore = ( initialState ) =>
createStore({
    modules: {
        journal: {
            ...journal,
            state: { ...initialState }
        }
    }
})

describe('Pruebas en el EntryView', () => {

    const store = createVuexStore( journalState )
    const mockRouter = {
        push: jest.fn()
    }

    let wrapper

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = shallowMount( EntryView, {
            props: {
                id: '-MtyY5gkXcOA33Si47NG'
            },
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        })
    })

    test('Debe de sacar al usuario porque el id no existen', () => {

        const wrapper = shallowMount( EntryView, {
            props: {
                id: 'Este ID no existe en el store'
            },
            global: {
                mocks: {
                    $router: mockRouter
                },
                plugins: [ store ]
            }
        })

        expect( mockRouter.push ).toHaveBeenCalledWith({ name: 'no-entry' })

    })

    test('Debe de mostrar la entrada correctamente', () => {

        expect( wrapper.html() ).toMatchSnapshot()
        expect( mockRouter.push ).not.toHaveBeenCalled()

    })


})