import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
