// import _ from 'lodash';
// import api from '../utils/api';


// import {
//     REGISTER_FAIL,
//     REGISTER_SUCCESS,
//     LOGIN_SUCCESS,
//     LOGIN_FAIL,
//     GOOGLE_SUCCESS,
//     USER_MESSAGE_LIMITS_EDIT,
//     USER_MESSAGE_LIMITS_USE_ONE,
//     SUCCESS_GET_ALL_USERS,
//     SUCCESS_GET_CHATBOT,
//     GET_ALL_FORMS,
//     LOGOUT
// } from './types';

// // Load User
// export const login = (email, password) => async (dispatch) => {

//     const body = {email, password};

//     try {
//         const res = await api.post('/auth', body);

//         console.log(res.data);

//         if(res.status === 200) {
//             dispatch({
//                 type: LOGIN_SUCCESS,
//                 payload: res.data
//             });

//             if(res.data.token) {
//                 api.defaults.headers.common['x-auth-token'] = res.data.token;
//                 localStorage.setItem('token', res.data.token);
//             }
//             // const chatbot = await api.post('/chatbot/get');
            
//             // if(chatbot.status === 200) {
//             //     dispatch({
//             //         type: SUCCESS_GET_CHATBOT,
//             //         payload: chatbot.data[0]    
//             //     })
//             // }

//             // const form = await api.get('/form/all');

//             // if(form.status === 200) {
//             //     dispatch({
//             //         type: GET_ALL_FORMS,
//             //         payload: form.data
//             //     })
//             // }

//         } else {
//             dispatch({
//                 type:LOGIN_FAIL,
//                 payload: res.data.errors
//             })
//         }

        
//     } catch (err) {
//         const errors = err.response.data.errors;

//         dispatch({
//             type:LOGIN_FAIL,
//             payload: errors
//         })
//     }
// }

// export const googleLogin = (email, name, password) => async(dispatch) => {

//     const data = {email, name, password};

//     try {
//         const res = await api.post('/users/google', data);

//         console.log("google login = ", res.data);

//         dispatch({
//             type: GOOGLE_SUCCESS,
//             payload: res.data
//         })

//     } catch (err) {
//         console.log(err.message);
//     }
// }

// // Register User
// export const register = (email, name, password) => async (dispatch) => {
    
//     const data = {email, name, password};

//     try {
//     const res = await api.post('/users', data);

//     if(_.hasIn(res.data, 'token')) {

//         dispatch({
//             type: REGISTER_SUCCESS,
//             payload : res.data
//         });

//         if(res.data.token) {
//             api.defaults.headers.common['x-auth-token'] = res.data.token;
//             localStorage.setItem('token', res.data.token);
//         }

//         const chatbot = await api.post('/chatbot/get');
            
//         if(chatbot.status === 200) {
//             dispatch({
//                 type: SUCCESS_GET_CHATBOT,
//                 payload: chatbot.data[0]
//             })
//         }

//         const form = await api.get('/form/all');

//             dispatch({
//                 type: GET_ALL_FORMS,
//                 payload: form.data
//             })

//     } else {
//         dispatch({
//             type: REGISTER_FAIL,
//             payload: res.data.errors
//         })
//     } } catch (err) {
//         console.log(err.message);
//     }
// }

// export const editmessagelimits = (limit) => async(dispatch) => {
    
//     dispatch({
//         type: USER_MESSAGE_LIMITS_EDIT,
//         payload: limit
//     })
// }

// export const useMessage = () => async(dispatch) => {
//     dispatch({
//         type:USER_MESSAGE_LIMITS_USE_ONE,
//         payload: -1
//     })
// }

// export const getAllUsers = () => async(dispatch) => {
//     try {
//         const res = await api.get('/auth/all');
        
//         dispatch({
//             type: SUCCESS_GET_ALL_USERS,
//             payload: res.data
//         })
//     } catch (err) {
//         console.log(err.message);        
//     }
// }

// export const logout = () => async(dispatch) => {
//     dispatch({
//         type: LOGOUT,
//         payload: -1
//     })
// }

// export const getUserInfo = (token) => async(dispatch) => {
//     try {
//         const res = await api.post('./auth/getUserInfo', {token});

//         dispatch({
//             type: LOGIN_SUCCESS,
//             payload: res.data
//         })
        
//     } catch (err) {
//         console.log(err.message);
//     }
// }