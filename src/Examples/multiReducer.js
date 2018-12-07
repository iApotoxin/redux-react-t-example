import { createStore, combineReducers } from "redux";
const initState = {
    salary: 15000,
    value: []
}
const userReducer = (state={name:'Kong',age:15},action)=>{
    switch (action.type) {
        case 'SET_NAME':
            state={ 
                ...state,
                name:action.payload
            }
            
            break;
        case 'SET_AGE':
            state={
                ...state,
                age:action.payload
            }
            break;
    
        default:
            break;
    }
    return state;

}
const employeeReducer = (state = initState, action) => {
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
const store = createStore(combineReducers({employeeReducer,userReducer}));
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
store.dispatch({
    type: 'SET_NAME',
    payload: "Apo"
});
store.dispatch({
    type: 'SET_AGE',
    payload: 20
});