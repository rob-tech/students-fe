import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './StyleSheets/form.css';
import './StyleSheets/homepage.css';
import './StyleSheets/Students.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Components/Main';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
