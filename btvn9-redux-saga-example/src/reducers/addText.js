import {GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED} from '../constants';
const addText = (state=[], action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload]
        case GET_USER_REQUEST:
            return [...state, action.payload]
        case GET_USER_SUCCESS:
            return [...state, action.payload]
        case GET_USER_FAILED:
            return [...state, action.payload]
        default:
            return state;
    }
}

export default addText;