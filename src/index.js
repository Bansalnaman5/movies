import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
// const logger=function({dispatch,setState}){
//   return function(next){
//     return function(action){
//       console.log("ACTION_TYPE = ",action.type);
//       next(action);
//     }
//   }
// }

const logger=({dispatch,getState})=>(next)=>(action)=>{
  if(typeof action!=='function'){

    console.log('ACTION =>',action.type);
  }
  next(action);
}
// const thunk=({dispatch,getState})=>(next)=>(action)=>{
//   if(typeof action==='function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// }

const store=createStore(rootReducer,applyMiddleware(logger,thunk));
console.log(store.getState());



// store.dispatch({
//   type:"ADD_MOVIES",
//   movies:[{name:'SuperMan'}]
// });
// console.log('AFter State',store.getState());

ReactDOM.render(
    <App store={store} />,

  document.getElementById('root')
);


