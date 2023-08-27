import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UseInkProvider } from 'useink';
import { Custom } from 'useink/chains';

const custom = Custom
  custom.id = "custom"
  custom.rpcs = ['ws://127.0.0.1:9944']
  console.log(custom)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseInkProvider 
      config={{ 
        dappName: 'Skovol', 
        chains: [custom]
      }}
    >
      <App />
      </UseInkProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
