// const initialState = {};

// const reducer = (state = initialState, action={type:'hello'}) => {
//   switch (action.type) {
//     case 'HELLO': (state = {}, action) => {
//       return state;
//     }
//     default: return state;
//   } 
// }

// export default reducer;

// root reducer top level reducer
import { combineReducers } from 'redux';
import tabsReducer from './tabs'
// import GifsReducer from './gifs';
// import other reducers here

const rootReducer = combineReducers({
  // gifs: GifsReducer
  // add reducer objects here
});

export default rootReducer;