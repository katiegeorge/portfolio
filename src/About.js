import React, { Component } from 'react';
import './App.scss';
import Tiles from './Tiles';
import headshot from './headshot.png';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Tiles primary="purple" />
                <div className="section">
                    <div className="section--content">
                        <div className="section--images">
                            <img src={ headshot } className="section--image" />
                        </div>
                        <div className="section--description">
                            <h1>Hi, I'm Katie.</h1>
                            <p>I'm a designer and developer based in Seattle.</p>
                            <p>
                                By day, I design and build investor experiences for Carta, an $800 million fintech startup creating a network of investors, companies, and owners. I like combining development and design to create cool stuff- which means yes, I do indeed have a love/hate relationship with CSS. In a former life, I graduated from Northwestern University with an MS in Computer Science in 2017 where I played with VR and front-end development. Before that, I got my BA in Psychology with a minor in CS also from NU.
                            </p>
                            <p>
                                I also write sometimes, hang out with my parents' dog, and play ultimate frisbee (after all, it was founded in Seattle). Talk to me about design systems, front-end dev, human-computer interaction, women in tech, or ultimate frisbee.
                            </p>
                            <p>
                                Talk to me about design systems, front-end dev, human-computer interaction, women in tech, or ultimate frisbee.
                            </p>
                            <p>Things I've been checking out recently:</p>
                            <li>Invisibilia</li>
                            <li>Hidden Brain</li>
                            <li>Young The Giant</li>
                            <li>Freakonomics</li>
                            <li>Atomic Design</li>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default About;
