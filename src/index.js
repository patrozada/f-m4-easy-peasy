import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import { HashRouter } from 'react-router-dom';


ReactDOM.render(
  <HashRouter>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </HashRouter>,document.getElementById('root'));

