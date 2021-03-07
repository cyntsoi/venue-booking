import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IdentityContextProvider } from 'react-netlify-identity';

const url = 'https://gallant-joliot-90fd17.netlify.app/'

ReactDOM.render(
  <React.StrictMode>
      <IdentityContextProvider url={url}>
         <App />
      </IdentityContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
