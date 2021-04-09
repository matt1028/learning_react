import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules';

const store = createStore(rootReducer);//create store

ReactDOM.render(
//wrapping it using Provider allows us to access redux store in any component
<Provider store={store}>
    <App />
</Provider>,document.getElementById('root'));
