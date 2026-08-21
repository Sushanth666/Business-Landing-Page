import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Dynamic favicon updater to prevent browser tab caching
try {
  const link = document.createElement('link');
  link.type = 'image/png';
  link.rel = 'icon';
  link.href = `/favicon.png?v=${Date.now()}`;
  document.head.appendChild(link);
} catch (e) {}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
