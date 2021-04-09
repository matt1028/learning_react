import { createStore } from 'redux';

//createStore is a function that creates Store
//A React project only creates one store

const initialState = {
    counter: 0,
    text: '',
    list: []
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//defining action functions
function increase(){
    return {
        type: INCREASE
    };
}
const decrease = () => ({
    type: DECREASE
});

const changeText = text => ({
    type: CHANGE_TEXT,
    text
});

const addToList = item => ({
    type: ADD_TO_LIST,
    item
});

//creating reducers
//using the action function above, create a function that creates a new state
//Warning :Keep immutability

function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                counter: state.counter + 1
            };
        case DECREASE:
            return {
                ...state,
                counter:  state.counter -1
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        case ADD_TO_LIST:
            return {
                ...state,
                list: state.list.concat(action.item)
            };
        default:
            return state
    }
}

//creating store
const store = createStore(reducer);
console.log(store.getState());

//listner that gets called whenver a state inside store changes
const listener = () => {
    const state = store.getState();
    console.log(state);
}

//call unsubscribe to unsubscribe
const unsubscribe = store.subscribe(listener);

//dispatching actions
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('Hello world'));
store.dispatch(addToList({ id: 1, text: 'Wow'}));