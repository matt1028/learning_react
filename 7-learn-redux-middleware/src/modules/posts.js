import { reducer } from 'react-async';
import * as postsAPI from '../api/posts';
import { createPromiseThunk, handleAsyncActions, reducerUtils, createPromiseThunkById, handleAsyncActionsById } from '../lib/asyncUtils';

const GET_POSTS = 'GET_POSTS';
const GET_POSTS_SUCCESS = 'GET_POST_SUCCESS';
const GET_POSTS_ERROR = 'GET_POST_ERROR';

const GET_POST = 'GET_POST';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_ERROR = 'GET_POST_ERROR';

//creating thunk function 
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostbyId);

const initialState = {
    posts: reducerUtils.initial(),
    post: {}
};

export default function posts(state = initialState, action){
    switch(action.type){
        case GET_POSTS:
        case GET_POSTS_SUCCESS:
        case GET_POSTS_ERROR:
            return handleAsyncActions(GET_POSTS, 'posts', true)(state,action);
            //this code is same as
            //const postsReducer = handleAsyncActions(GET_POSTS, 'posts');
            //return postsReducer(state, action);
        case GET_POST:
        case GET_POST_SUCCESS:
        case GET_POST_ERROR:
            return handleAsyncActions(GET_POSTS, 'posts')(state,action);
        default:
            return state;
    }
}

//dispatch different action whenever a promise starts, succeeds, fails
// export const getPosts = () => async dispatch => {
//     dispatch({ type: GET_POSTS});
//     try{
//         const posts = await postsAPI.getPosts();
//         dispatch({ type: GET_POSTS_SUCCESS, posts}); 
//     }catch(e) {
//         dispatch({ type: GET_POSTS_ERROR, error: e});
//     }
// };
// export const getPost = () => async dispatch => {
//     dispatch({ type: GET_POST});
//     try{
//         const post = await postsAPI.getPostbyId();
//         dispatch({ type: GET_POST_SUCCESS, post}); 
//     }catch(e) {
//         dispatch({ type: GET_POST_ERROR, error: e});
//     }
// };

