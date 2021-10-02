import axios from 'axios'

export default axios.create({
    baseURL: "https://shuhna.herokuapp.com/Apis/",
    timeout: 3000,
    timeoutErrorMessage: "Request timed out"
})