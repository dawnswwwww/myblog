import axios from 'axios'
axios.defaults.withCredentials = true
const request = (params: any) => {
    return new Promise((resolve, reject) => {
        axios.post(params.url, params.params).then((result: any) => {
            // debugger
            resolve(result.data)
        })
    })
}

export default { request }
