import { useStore } from 'vuex'


const useAuth = () => {

    const store = useStore()

    const createUser = async( user ) => {
        console.log( user )
        // Todo: store.dispatch('auth/createUser', user)
        // return resp
        console.log(store)
    }

    return {
        createUser,
    }
}

export default useAuth