import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App abc="123"/>
  </React.StrictMode>,
  document.getElementById('root')
);

