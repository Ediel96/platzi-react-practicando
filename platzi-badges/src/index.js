import React from 'react';
import ReactDOM from 'react-dom';

//style
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

//components
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(
  <App/>,
  container
);
