import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
})

instance.interceptors.request.use(
    (config) => {
        config.headers.authorization = localStorage.getItem('token');
        return config;
    },
    (err) => {
        // if(err.response.status === 401 || err.response.status === 403) {

        // }
        return Promise.reject(err);
    }
)
export default instance;
