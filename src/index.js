import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fabLinkedIn } from '@fortawesome/free-solid-svg-icons'

ReactDOM.render(<App />, document.getElementById('root'));
