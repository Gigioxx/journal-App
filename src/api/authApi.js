import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyCRgfSv3J_oI_GDqEmEbRlZlwSETOQZfKo'
    }
})

// console.log( process.env.NODE_ENV )//TEST durante testing

export default authApi