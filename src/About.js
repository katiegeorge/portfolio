import React, { Component } from 'react';
import './css/App.scss';
import Tiles from './Tiles';
import headshot from './assets/headshot.png';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Tiles primary="purple" />
                <div className="section">
                    <div className="section--content">
                        <div className="section--images">
                            <img src={ headshot } className="section--image" />
                            <a
                                href="https://drive.google.com/file/d/1Ohvax04Gy_YxfpiHk5UctV5zz8AQp89Y/view?usp=sharing"
                                target="_blank"
                                className="btn btn__block"
                            >
                                Resumé
                            </a>
                        </div>
                        <div className="section--description">
                            <h1>Hi, I'm Katie. 👋</h1>
                            <p>I'm a designer and developer based in Seattle.</p>
                            <p>
                                By day, I design and build investor experiences for <a href="https://carta.com" target="_blank">Carta</a>. I like combining development and design to create cool stuff- which means yes, I do indeed have a love/hate relationship with CSS. In a former life, I graduated from Northwestern University with an MS in Computer Science. Before that, I got my BA in Psychology also from NU.
                            </p>
                            <p>
                                I also <a target="_blank" href="https://medium.com/@katie.george">write sometimes</a>, hike around the PNW, play ultimate frisbee, and hang out with my parents' dog. Talk to me about design systems, front-end dev, human-computer interaction, or women in tech.
                            </p>
                            <p>Things I think are cool:</p>
                            <ul>
                                <li>Invisibilia</li>
                                <li>Hidden Brain</li>
                                <li>Young The Giant</li>
                                <li>Freakonomics</li>
                                <li>Atomic Design</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;
