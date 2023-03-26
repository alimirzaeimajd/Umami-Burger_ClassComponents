import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createReducer } from 'redux';
import reducer from './store/reducer';
const store = createReducer(reducer)
const app = (
  <Provider store={store}>
    <App />
  </Provider>
)



ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
