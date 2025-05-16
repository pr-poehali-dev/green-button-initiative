
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Импорт шрифта Montserrat с поддержкой кириллицы
const montserratLink = document.createElement('link');
montserratLink.rel = 'stylesheet';
montserratLink.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap&subset=cyrillic';
document.head.appendChild(montserratLink);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
