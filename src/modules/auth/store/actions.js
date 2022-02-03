import authApi from "@/api/authApi"

// export const myAction = async ({ commit }) => {

// }

export const createUser = async ({ commit }, user ) => {

    const { name, email, password } = user
    
    try {

        const { data } = await authApi.post(':signUp', { email, password, returnSecureToken: true })
        console.log( data )

        // todo Mutation: loginUser
        console.log(commit, name)
        return { ok: true }

    } catch ( error ) {
        console.log(error.response)
        return { ok: false, message: error.response.data.error.message }
    }

}