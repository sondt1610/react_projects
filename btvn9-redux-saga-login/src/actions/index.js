import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED } from '../constants';

export const loginRequest = (user) => ({
    type: LOGIN_USER_REQUEST,
    user
})
export const loginSuccess = (token) => ({
    type:LOGIN_USER_SUCCESS,
    token
})