import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/user";
import themeReducer from "./features/theme";
const root = ReactDOM.createRoot(document.getElementById('root'));
//to create a new reducer, create a new file in features.js
//we have named userReducer as userR
const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
});


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
