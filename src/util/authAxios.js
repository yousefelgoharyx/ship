import axios from 'axios'

export default function api(token) {
    return axios.create({
        baseURL: "https://shuhna.herokuapp.com/Apis/",
        timeout: 3000,
        headers: {"Auth": token}
    })
}