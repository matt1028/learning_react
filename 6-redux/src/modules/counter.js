//Creating action type
//Using DUCKS pattern
//put prefix for actions when using DUCKS pattern

const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//creating action creating function and exporting it
export const setDiff = diff => ({type: SET_DIFF, diff});
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//initital state
const initialState = {
    number: 0,
    diff: 1
};

//Defining reducer
//export reducers as default
export default function counter(state = initialState, action){
    switch(action.type) {
        case SET_DIFF:
            return {
                ...state, 
                diff: action.diff
            }
        case INCREASE:
            return {
                ...state, 
                number: state.number + state.diff
            };
        case DECREASE:
            return {
                ...state, 
                number: state.number - state.diff
            }
        default: 
            return state;
    }
}
