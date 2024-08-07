import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './css/reset.scss'
import store from '@/store/index'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)

// reportWebVitals();
