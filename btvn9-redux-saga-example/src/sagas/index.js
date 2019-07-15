import { takeEvery, put, call } from "@redux-saga/core/effects";
import {GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED} from '../constants';
function* getUrl(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => data.json())
    .then(json => put(GET_USER_SUCCESS, json))
    .catch(error => put(GET_USER_FAILED, error))
}
function* fetchRequest(){
    yield call(getUrl)
}

export default function* helloSaga() {
    console.log('Hello Sagas!')
    takeEvery(GET_USER_REQUEST, fetchRequest)
}