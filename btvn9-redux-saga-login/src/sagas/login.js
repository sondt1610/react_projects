import {LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILED } from '../constants';
import { takeEvery,take ,call,put} from "redux-saga/effects";

function fetchUser(user) {
    console.log(user.user);
    return fetch('https://reqres.in/api/login',{method:'POST',body:JSON.stringify(user.user),headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },})
    .then(response => response.json())
    .catch(error => console.log(error))
}
function* loginFlow(user){
    try{
        console.log('1');
        console.log(user);
        // const user = yield take(LOGIN_USER_REQUEST);
        // console.log('2');
        const data = yield call(fetchUser,user);
        console.log(data);
        console.log('3');
        yield put({type:LOGIN_USER_SUCCESS,token:data.token})
        return data.token;
        
    }catch(error){
        yield put({type:LOGIN_USER_FAILED,error})
    }
}
export default function* watcherUserLogin(){
    console.log('saga run')
    yield takeEvery(LOGIN_USER_REQUEST,loginFlow)
    // while(true){
    //     const {email, password} =yield take(LOGIN_USER_REQUEST)
    //     const token = yield call(loginFlow, email, password)
    // }
}