
import { createStore } from "redux";
const initState = {
    salary: 15000,
    value: []
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD':
            state = {
                ...state,
                salary: state.salary += action.payload,
                value: [...state.value, action.payload]
            }
            break;
        case 'SUBTRACT':
            state = {
                ...state,
                salary: state.salary -= action.payload,
                value: [...state.value, (action.payload) * -1]
            }
            break;

        default:
            break;
    }
    return state;

}
const store = createStore(reducer);
store.subscribe(() => {
    console.log("Update store ", store.getState());

})
store.dispatch({
    type: 'ADD',
    payload: 15000
});
store.dispatch({
    type: 'ADD',
    payload: 15000
});
store.dispatch({
    type: 'SUBTRACT',
    payload: 10000
});



