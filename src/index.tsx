import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Views/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initFirebase } from './firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
initFirebase();
