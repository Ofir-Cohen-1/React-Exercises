import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../src/components/Exercise4.1/style1.css";
// import "../src/components/Exercise4.2/style2.css";
// import "../src/components/Exercise6.1/style3.css";
// import "../src/components/Exercise7.2/style4.css";
// import "../src/components/Exercise7.3/style5.css";
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
