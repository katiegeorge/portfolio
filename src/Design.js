import React, { Component } from 'react';
import './css/App.scss';
import ProjectCard from './ProjectCard';
import Project from './Project';
import Tiles from './Tiles';
import navigation from './assets/Compass-color.png';
import investor from './assets/Investment-color.png';
import octopus from './assets/Octopus-color.png';
import sea1 from './assets/sensorysea1.png';
import sea2 from "./assets/sensorysea2.png";
import landing1 from "./assets/investorlandingpage1.png";
import landing2 from "./assets/investorlandingpage3.png";

export const PROJECT_1 = 'project-1';
export const PROJECT_2 = 'project-2';
export const PROJECT_3 = 'project-3';

class Design extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedProjectId: PROJECT_1,
        }
    }

    isActive(id) {
        return this.state.selectedProjectId === id;
    }

     setActiveTab(selectedProjectId) {
        this.setState({ selectedProjectId });
    }

    renderBody() {
        return (
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor ultrices gravida. Vestibulum pulvinar magna ut orci porta, et viverra nisl bibendum. Aliquam vitae turpis convallis, consequat sapien et, imperdiet magna. Morbi eget odio vel dolor elementum maximus. Aliquam mi lectus, lacinia et mollis a, ultricies vel eros. Ut urna mauris, suscipit sed rhoncus id, rutrum sed tellus. Fusce rhoncus aliquam lacus. Praesent auctor sapien vitae diam eleifend congue. Donec ultrices dictum venenatis. Aliquam eu libero aliquet urna suscipit euismod. Sed id risus blandit, interdum lorem non, consectetur magna.

            In feugiat rutrum arcu, et bibendum libero sollicitudin id. Integer lacinia velit at orci maximus ultricies. Nullam rutrum ante nec quam accumsan, sed faucibus justo elementum. Mauris sit amet pellentesque risus. Curabitur ut tristique ante, vel scelerisque est. Donec pharetra hendrerit nisi sed dignissim. Nulla hendrerit erat nec tellus maximus porttitor. Curabitur ac massa non quam aliquet cursus. Nulla porta elit nec lacus tempor, a scelerisque sapien auctor. Praesent pharetra orci nec elit vulputate, id ultrices libero tempus. Vivamus hendrerit elementum metus. Cras in fermentum neque. Donec tortor nisl, varius vitae diam non, placerat condimentum nibh.

            Suspendisse ac eros tempor, fringilla lectus vitae, placerat metus. Vivamus ac viverra velit, quis tristique erat. Duis quam orci, malesuada a augue eget, dictum luctus diam. Aenean sed eros eget ipsum ultrices suscipit tincidunt sed tortor. Nam ornare vestibulum nunc sit amet gravida. Etiam semper suscipit dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed pulvinar faucibus orci, et egestas velit fringilla vitae. Donec sodales mauris eu felis tempus pellentesque. Fusce elit nibh, feugiat bibendum ante et, pharetra blandit neque. Quisque ut rutrum lectus, at pellentesque libero. Sed laoreet libero a ligula imperdiet rutrum. Nunc efficitur placerat ante nec pellentesque. Phasellus purus risus, auctor vel aliquet eu, venenatis pharetra turpis.

            Pellentesque dui orci, ultrices et finibus vel, lacinia vitae risus. Praesent dapibus mi at elementum porttitor. Sed luctus, sapien quis euismod mollis, leo tortor tincidunt ipsum, id posuere felis nibh nec mi. Suspendisse rutrum, lectus et ornare interdum, lectus magna tempus lectus, at posuere diam nisi sit amet massa. Nunc imperdiet nec felis non mollis. Donec vehicula nulla metus, eget tincidunt mi rhoncus vel. Nam feugiat lacinia sapien in malesuada. Phasellus tristique sed libero non suscipit.
            </p>
        );
    }

    renderSensorySea() {
        return (
          <React.Fragment>
            <div className="project--images grid-xs-1 grid-md-2">
              <img src={sea1} className="project--image project--image__vertical" />
              <img src={sea2} className="project--image project--image__vertical" />
            </div>
            <p>
              Sensory Sea is a multi-level Android game in which you
              play as Hapty the jellyfish and you must maneuver through
              different obstacles in order to advance to the next stage.
              In order to move through each obstacle, you must fling
              Hapty through the gaps, while avoiding whales and the
              edges of the reef.
            </p>
            <p>
              To make matters more interesting, Sensory Sea is haptic
              enabled. This means that part of the game is played
              through the sense of touch instead of just sight. Using
              Tanvas's touchscreen technology, we are able to create the
              feeling of different textures directly on top of the glass
              in which the game is played (on a Nexus 9). Therefore, to
              help get Hapty through the gaps in each obstacle, we have
              added a haptic texture (kind of like a buzzy feeling) over
              where the gap is on each level. This way, the player can
              simply feel on their screen where the "buzz" is, and fling
              Hapty safely through.
            </p>
            <p>
              Sensory Sea was one of my main projects during my
              internship at Tanvas, where I was one of two core User
              Experience team members. We developed the game in Java
              using Android Studio, and mocked up the designs for both
              the artwork and the textures in Adobe Photoshop.
            </p>
          </React.Fragment>
        );
    }

    renderLandingPage() {
        return (
          <React.Fragment>
            <div className="project--images grid-xs-1 grid-md-2">
              <img src={landing1} className="project--image" />
              <img src={landing2} className="project--image" />
            </div>
            <p>
              Investors need a landing page, so we gave them one.
            </p>
          </React.Fragment>
        );
    }

    render() {
        const projects = [
            {
                title: "Navigation redesign",
                tags: ['UX Design', 'Design Systems'],
                description: "Redesigned Carta's navigation from scratch.",
                image: navigation,
                id: PROJECT_1,
            },
            {
                title: "Rethinking an Investor's landing page",
                tags: ['React', 'Design Systems'],
                description: "Gave investors a better summary of their holdings.",
                image: investor,
                id: PROJECT_2,
                size: "big",
            },
            {
                title: "Sensory Sea",
                tags: ['Android', 'Mobile design', 'Haptic feedback'],
                description: "An android game where you navigate an octopus through tangible obstacles.",
                image: octopus,
                id: PROJECT_3,
            },
        ];
        return (
            <React.Fragment>
                <Tiles primary="green" />
                <div className="section">
                    <h1>Design</h1>
                    <div className="cards-wrapper grid-xs-1 grid-lg-3">
                        { projects.map(project => (
                                <ProjectCard
                                    title={ project.title }
                                    tags={ project.tags }
                                    color="green"
                                    image={ project.image }
                                    size={ project.size === "big" ? "big" : null }
                                    description={ project.description }
                                    isActive={ this.isActive(project.id) }
                                    onActiveTab={ this.setActiveTab.bind(this, project.id) }
                                    className={ this.isActive(project.id) ? 'card card__active card__active--green' : 'card'}
                                />
                            ))
                        }
                    </div>
                    { this.state.selectedProjectId === PROJECT_1 &&
                        <Project
                            title="Navigation redesign"
                            date="Fall 2018"
                            location="Carta"
                            body={ this.renderBody() }
                        />
                    }
                    { this.state.selectedProjectId === PROJECT_2 &&
                        <Project
                            title="Rethinking an investor's landing page"
                            date="Summer/ Fall 2018"
                            location="Carta"
                            body={ this.renderLandingPage() }
                        />
                    }
                    { this.state.selectedProjectId === PROJECT_3 &&
                        <Project
                            title="Sensory Sea"
                            date="Summer 2017"
                            location="Tanvas"
                            body={ this.renderSensorySea() }
                        />
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Design;
