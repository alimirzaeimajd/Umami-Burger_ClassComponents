import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { createReducer } from 'redux';
import reducer from './store/reducer';
const store = createReducer(reducer)
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);



ReactDOM.render(app, document.getElementById('root'));
reportWebVitals();
