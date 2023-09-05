import React from 'react'; // import React library. write html in js :)
import ReactDOM from 'react-dom/client'; // import ReactDOM library. render html to DOM
import './index.css'; // import index.css file
import App from './App'; // import App component within this file
import reportWebVitals from './reportWebVitals';

// attach App component to root element in index.html
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  // give more detailed error message
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
