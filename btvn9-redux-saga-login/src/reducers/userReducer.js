import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED } from '../constants';

export const userLogin = (state={},action) => {
    switch(action.type){
        case LOGIN_USER_REQUEST:
            return {...state,user: action.user}
        case LOGIN_USER_SUCCESS:
            return {...state,token:action.token}
        default:
            return state;
    }
}