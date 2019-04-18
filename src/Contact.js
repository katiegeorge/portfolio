import React, { Component } from 'react';
import './App.scss';
import headshot from './headshot.png';

class Contact extends Component {
    getRandomColor(index) {
        const colors = ['#EACB5D', '#E2B031', '#EAD99C', '#ADD9E7', '#307161'];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];

        return randomColor;
    }

    render() {
        const fields = [
            {
                label: 'Email',
                value: 'katiegeorge94@gmail.com',
            },
            {
                label: 'LinkedIn',
                value: 'linkedin.com/in/katiemgeorge',
            },
            {
                label: 'GitHub',
                value: 'github.com/katiegeorge',
            },
            {
                label: 'Phone',
                value: '949-910-9194',
            },
            {
                label: 'Medium',
                value: 'medium.com/katiegeorge'
            }
        ];
        const n = 165;
        const boxes = [...Array(n)].map((e, i) => (
            <div
                className="cover--item"
                key={i}
                style={{ backgroundColor: this.getRandomColor(i) }}
            />
        ));

        return (
            <React.Fragment>
                <div className="cover">
                    { boxes }
                </div>
                <div className="section">
                    <h1>Contact</h1>
                    <p>
                        Want to talk? Always welcome collaborators, comments, compliments, and jokes.
                    </p>
                    <ul>
                        { fields.map(field => (
                            <li>{ field.label }: { field.value }</li>
                        )) }
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;
