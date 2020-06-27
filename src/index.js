import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* This is what is rendered to the DOM,
        in this code, render the components in order,
        CSS is in index.css.*/}
        <div>
          <App />
        </div> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
