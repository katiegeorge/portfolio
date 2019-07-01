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

  renderBody() {
    return (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        auctor ultrices gravida. Vestibulum pulvinar magna ut orci porta, et
        viverra nisl bibendum. Aliquam vitae turpis convallis, consequat sapien
        et, imperdiet magna. Morbi eget odio vel dolor elementum maximus.
        Aliquam mi lectus, lacinia et mollis a, ultricies vel eros. Ut urna
        mauris, suscipit sed rhoncus id, rutrum sed tellus. Fusce rhoncus
        aliquam lacus. Praesent auctor sapien vitae diam eleifend congue. Donec
        ultrices dictum venenatis. Aliquam eu libero aliquet urna suscipit
        euismod. Sed id risus blandit, interdum lorem non, consectetur magna. In
        feugiat rutrum arcu, et bibendum libero sollicitudin id. Integer lacinia
        velit at orci maximus ultricies. Nullam rutrum ante nec quam accumsan,
        sed faucibus justo elementum. Mauris sit amet pellentesque risus.
        Curabitur ut tristique ante, vel scelerisque est. Donec pharetra
        hendrerit nisi sed dignissim. Nulla hendrerit erat nec tellus maximus
        porttitor. Curabitur ac massa non quam aliquet cursus. Nulla porta elit
        nec lacus tempor, a scelerisque sapien auctor. Praesent pharetra orci
        nec elit vulputate, id ultrices libero tempus. Vivamus hendrerit
        elementum metus. Cras in fermentum neque. Donec tortor nisl, varius
        vitae diam non, placerat condimentum nibh. Suspendisse ac eros tempor,
        fringilla lectus vitae, placerat metus. Vivamus ac viverra velit, quis
        tristique erat. Duis quam orci, malesuada a augue eget, dictum luctus
        diam. Aenean sed eros eget ipsum ultrices suscipit tincidunt sed tortor.
        Nam ornare vestibulum nunc sit amet gravida. Etiam semper suscipit
        dictum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia Curae; Sed pulvinar faucibus orci, et egestas velit
        fringilla vitae. Donec sodales mauris eu felis tempus pellentesque.
        Fusce elit nibh, feugiat bibendum ante et, pharetra blandit neque.
        Quisque ut rutrum lectus, at pellentesque libero. Sed laoreet libero a
        ligula imperdiet rutrum. Nunc efficitur placerat ante nec pellentesque.
        Phasellus purus risus, auctor vel aliquet eu, venenatis pharetra turpis.
        Pellentesque dui orci, ultrices et finibus vel, lacinia vitae risus.
        Praesent dapibus mi at elementum porttitor. Sed luctus, sapien quis
        euismod mollis, leo tortor tincidunt ipsum, id posuere felis nibh nec
        mi. Suspendisse rutrum, lectus et ornare interdum, lectus magna tempus
        lectus, at posuere diam nisi sit amet massa. Nunc imperdiet nec felis
        non mollis. Donec vehicula nulla metus, eget tincidunt mi rhoncus vel.
        Nam feugiat lacinia sapien in malesuada. Phasellus tristique sed libero
        non suscipit.
      </p>
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
              body={this.renderBody()}
            />
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Code;
