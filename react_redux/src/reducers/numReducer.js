const numInitialState = ["ma hinh", "ban phim", "chuot"];
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {
        case "ADD_NEW":
            return [...state, action.newItem]
        case "DELETE":
            return [state.filter((value, i) => i !== action.index)]
        default:
            return state
    }
}
export default numReducer;