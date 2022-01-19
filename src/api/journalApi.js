import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-6963c-default-rtdb.firebaseio.com'
})

export default journalApi