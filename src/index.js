import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducer';

const store=createStore(movies);
console.log(store.getState());

store.dispatch({
  type:"ADD_MOVIES",
  movies:[{name:'SuperMan'}]
});
console.log('AFter State',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


