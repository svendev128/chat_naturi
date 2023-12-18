import axios from 'axios';
import store from '../store';
import {LOGOUT} from '../actions/types';

const api = axios.create({
    baseURL: '/api',
    headers: {
        'Constent-Type':'application/json'
    }
});


export const uploadApi = axios.create({
    baseURL: "/api",
    headers: {
        'Content-Type': 'multipart/form-data'
    }
});

api.interceptors.response.use(
    (res) => res,
    (err) => {
        if(err.response.status === 401) {
            store.dispatch({type: LOGOUT});
        }
        return Promise.reject(err);
    }
)

export default api;