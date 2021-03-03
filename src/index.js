import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducer';

const store=createStore(rootReducer);
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


