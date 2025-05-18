import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';  // اینجا وارد کردن فایل استایل اصلی

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);