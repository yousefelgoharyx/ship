import axios from 'axios'

export default axios.create({
    baseURL: "http://shuhna.herokuapp.com/Apis/",
    timeout: 3000,
    headers: {"X-Auth": "123"}
})