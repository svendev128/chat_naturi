// import {
//     REGISTER_SUCCESS,
//     REGISTER_FAIL,
//     LOGIN_SUCCESS,
//     LOGIN_FAIL,
//     GOOGLE_SUCCESS,
//     USER_MESSAGE_LIMITS_EDIT,
//     USER_MESSAGE_LIMITS_USE_ONE,
//     SUCCESS_GET_ALL_USERS,
//     LOGOUT
// } from '../actions/types';

// const initialState = {
//     token: localStorage.getItem('token'),
//     isAuthenticated: null,
//     loading: true,
//     name:"",
//     email:"",
//     user: [],
//     errors: [],
//     message:6,
//     dialogHistory: [],
// };

// const authReducer = (state = initialState, action) => {
//     const {type, payload} = action;

//     switch(type) {
//         case USER_MESSAGE_LIMITS_EDIT:
//             return {
//                 ...state,
//                 message : 6 - state.message + payload
//             }
//         case USER_MESSAGE_LIMITS_USE_ONE:
//             return {
//                 ...state,
//                 message: state.message - 1
//             }
//         case REGISTER_SUCCESS:
//             return {
//                 ...state,
//                 ...payload,
//                 isAuthenticated : true,
//                 loading: false
//             }
//         case REGISTER_FAIL:
//             return {
//                 ...state,
//                 errors: [...state.errors, payload]
//             }
//         case LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 ...payload,
//                 isAuthenticated: true,
//                 loading: false
//             }
//         case LOGIN_FAIL:
//             return {
//                 ...state,
//                 errors: [...state.errors, ...payload]
//             }
//         case GOOGLE_SUCCESS:
//             return {
//                 ...state,
//                 ...payload,
//                 isAuthenticated:true,
//                 loading: false
//             }
//         case SUCCESS_GET_ALL_USERS:
//             return {
//                 ...state,
//                 user:payload
//             }
//         case LOGOUT :
//             return initialState
//         default: return state;
//     }
// }

// export default authReducer