import React, { Component } from 'react';
import './App.scss';
import Tiles from './Tiles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Tiles primary="yellow" />
                <div className="section">
                    <h1>Contact</h1>
                    <p>
                        Want to talk? Always welcome collaborators, comments, compliments, and jokes.
                    </p>
                    <a target="_blank" className="btn btn--link" href="https://www.linkedin.com/in/katiemaegeorge/">
                        <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                        LinkedIn
                    </a>
                    <a target="_blank" className="btn btn--link" href="https://github.com/katiegeorge">GitHub</a>
                    <a target="_blank" className="btn btn--link" href="https://medium.com/@katie.george">Medium</a>
                    <a target="_blank" className="btn btn--link" href="https://mail.google.com/mail/?view=cm&fs=1&to=katiegeorge94@gmail.com">Gmail</a>

                </div>
            </React.Fragment>
        );
    }
}

export default Contact;
