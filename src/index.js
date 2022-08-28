import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './components/App';
import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={createStore(reducers)}>
  <App />
</Provider>
);


