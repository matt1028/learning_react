//declaring action type
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';

//declaring action creating function
let nextId = 1;
export const addTodo = text => ({
    type: ADD_TODO,
    todo: {
        id: nextId++,
        text
    }
});
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

//declaring initial state
//reducer initial state does not have to be object type
//can be anything
const initialState = [
    //components pushed inside this array would have the following structure
    // {
    //     id: 1,
    //     text: 'example',
    //     done: false
    // }
];

export default function todos(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
                return state.concat(action.todo);
        case TOGGLE_TODO:
                return state.map(
                    todo =>
                    todo.id === action.id //if id matches
                        ? {...todo, done: !todo.done} //reverse todo state
                        : todo //else, leave the state
                );
        default:
            return state;
    }
}