import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import memoryGame from './reducers'
import { shuffleCards } from './actions';
import { Provider } from 'react-redux'

const store = createStore(memoryGame, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch(shuffleCards());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));


