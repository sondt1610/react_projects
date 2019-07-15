import {GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED} from '../constants';
let id = 0;
export const userRequest = () => ({
    type: GET_USER_REQUEST,
    payload: {
        id: id++,
        time: new Date(),
    }
})
export const userSuccess = (json) => ({
    type: GET_USER_SUCCESS,
    payload: {
        id: id++,
        time: new Date(),
        data: json
    }
})
export const userFail = (error) => ({
    type: GET_USER_FAILED,
    payload: {
        error: error
    }
})
export const fetchRequest = () => {
    return (dispatch)=>{
        dispatch(userRequest());
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json =>dispatch(userSuccess(json)))
        .catch(error =>dispatch(userFail(error)))
    }
    
}
export default fetchRequest;