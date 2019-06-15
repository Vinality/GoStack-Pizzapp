import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

const setAuthToken = (userAuth) => api.setHeader('Authorization', 'Bearer ' + userAuth)
const removeAuthToken = () => api. deleteHeader('Authorization')

export default api;
