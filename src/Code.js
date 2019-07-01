import React, { Component } from 'react';
import './css/App.scss';
import ProjectCard from './ProjectCard';
import Project from './Project';
import Tiles from './Tiles';
import alert from './assets/Bell-color.png';
import mobile from './assets/Mobile-color.png';
import vr from './assets/VR-color.png';
import vr1 from './assets/vr-timeline-1.png';
import vr2 from './assets/vr-timeline-2.png';
import mobile1 from "./assets/mobile1.png";
import mobile2 from "./assets/mobile2.png";
import mobile3 from "./assets/mobile3.png";
import mobile4 from "./assets/mobile4.png";
import alert1 from "./assets/alert1.png";
import alert2 from "./assets/alert2.png";

export const PROJECT_1 = 'project-1';
export const PROJECT_2 = 'project-2';
export const PROJECT_3 = 'project-3';

class Code extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProjectId: PROJECT_1
    };
  }

  isActive(id) {
    return this.state.selectedProjectId === id;
  }

  setActiveTab(selectedProjectId) {
    this.setState({ selectedProjectId });
  }

  renderAlert() {
    return (
      <React.Fragment>
        <div className="project--images grid-xs-1 grid-md-2">
          <img src={alert1} className="project--image" />
          <img src={alert2} className="project--image" />
        </div>
        <p>
          Bzzz bzz.
        </p>
      </React.Fragment>
    );
  }

  renderVRTimeline() {
    return (
      <React.Fragment>
        <div className="project--images grid-xs-1 grid-md-2">
          <img src={vr1} className="project--image" />
          <img src={vr2} className="project--image" />
        </div>
        <p>
          An independent project I worked on in the Knight Lab using A-Frame and
          MagicaVoxel. I wanted to create something to celebrate the history of
          feminism and women's rights in the United States post 1800, and
          thought a timeline could capture my ideas. I created all of the scenes
          and characters from scratch and added some simple animations in
          Javascript. Users can view the timeline with Google Cardboard or in
          their web browsers.
        </p>
        <p>
          <a href="https://medium.com/@katie.george/making-a-timeline-vr-style-8276149fb780">
            Read my Medium article about my process here. &rsaquo;
          </a>
        </p>
        <p>
          <a href="https://katiegeorge.github.io/VRTimeline/" target="_blank">
            Or just check it out live! &rsaquo;
          </a>
        </p>
      </React.Fragment>
    );
  }

  renderMobile() {
    return (
      <React.Fragment>
        <div className="project--images grid-xs-1 grid-md-4">
          <img src={mobile1} className="project--image project--image__vertical" />
          <img src={mobile2} className="project--image project--image__vertical" />
          <img src={mobile3} className="project--image project--image__vertical" />
          <img src={mobile4} className="project--image project--image__vertical" />
        </div>
        <p>
          Phones are cool.
        </p>
      </React.Fragment>
    );
  }

  render() {
    const projects = [
      {
        title: "Making Carta mobile-first",
        tags: ["React", "Design Systems", "CSS", "Mobile first"],
        description: "Created Carta's first mobile-friendly product.",
        image: mobile,
        size: "small",
        id: PROJECT_1
      },
      {
        title: "VR Timeline",
        tags: ["WebVR", "A-Frame", "HTML/CSS"],
        description:
          "A virtual-reality timeline of the history of women's rights.",
        image: vr,
        id: PROJECT_2
      },
      {
        title: "Alert component",
        tags: ["React", "HTML/CSS", "Design Systems"],
        description:
          "Built an unbreakable alert component for Carta's design system.",
        image: alert,
        id: PROJECT_3
      }
    ];
    return (
      <React.Fragment>
        <Tiles primary="blue" />
        <div className="section">
          <h1>Code</h1>
          <div className="cards-wrapper grid-xs-1 grid-md-3 grid-lg-2 grid-xl-3">
            {projects.map(project => (
              <ProjectCard
                title={project.title}
                tags={project.tags}
                image={project.image}
                color="blue"
                size={project.size === "small" ? "small" : null}
                description={project.description}
                isActive={this.isActive(project.id)}
                onActiveTab={this.setActiveTab.bind(this, project.id)}
                className={
                  this.isActive(project.id)
                    ? "card card__active card__active--blue"
                    : "card"
                }
              />
            ))}
          </div>
          {this.state.selectedProjectId === PROJECT_1 && (
            <Project
              title="Making Carta mobile-first"
              date="2018 - present"
              location="Carta"
              body={this.renderMobile()}
            />
          )}
          {this.state.selectedProjectId === PROJECT_2 && (
            <Project
              title="VR Timeline"
              date="Spring 2017"
              location="Northwestern Knight Lab"
              body={this.renderVRTimeline()}
            />
          )}
          {this.state.selectedProjectId === PROJECT_3 && (
            <Project
              title="Alert component"
              date="Winter 2019"
              location="Carta"
              body={this.renderAlert()}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Code;
