import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from  'axios';
import store from '../src/redux/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api'
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api/'

ReactDOM.render(
  <Provider store={store }>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
