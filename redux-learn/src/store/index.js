import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  posts: [],
};

//Action に GET_POST_DATA を追加し type が GET_POST_DATA の場合に payload の値を posts に設定します。
const reducer = ( state = initialState , action ) => {
  switch(action.type){
    case 'GET_POST_DATA':
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state;
  }
}

export const getPosts = () => {
  return async (dispatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    dispatch({
      type: 'GET_POST_DATA',
      payload: data,
    });
  };
};

const store = createStore(reducer,applyMiddleware(thunk));

export default store;