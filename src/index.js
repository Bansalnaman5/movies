import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducer';

const logger=function({dispatch,setState}){
  return function(next){
    return function(action){
      console.log("ACTION_TYPE = ",action.type);
      next(action);
    }
  }
}

const store=createStore(rootReducer,applyMiddleware(logger));
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


