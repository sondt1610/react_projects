import {GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED} from '../constants';
let id = 0;
const userRequest = (text) => ({
    type: GET_USER_REQUEST,
    payload: {
        id: id++,
        text,
    }
})
const fetchRequest = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}
export default userRequest;