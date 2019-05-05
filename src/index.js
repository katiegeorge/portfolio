import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom';
import './css/index.css';
import About from './About';
import Code from './Code';
import Design from './Design';
import Contact from './Contact';
import serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fabLinkedIn } from '@fortawesome/free-solid-svg-icons'

const routing = (
  <Router>
    <div className="app">
      <ul className="nav">
        <li className="nav--list">
          <NavLink className="nav--item nav--item__1" activeClassName="nav--item__1__active" to="/about">About</NavLink>
        </li>
        <li className="nav--list">
          <NavLink className="nav--item nav--item__2" activeClassName="nav--item__2__active" to="/code">Code</NavLink>
        </li>
        <li className="nav--list">
          <NavLink className="nav--item nav--item__3" activeClassName="nav--item__3__active" to="/design">Design</NavLink>
        </li>
        <li className="nav--list">
          <NavLink className="nav--item nav--item__4" activeClassName="nav--item__4__active" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Route exact path="/about" component={About} />
      <Route path="/design" component={Design} />
      <Route path="/code" component={Code} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
