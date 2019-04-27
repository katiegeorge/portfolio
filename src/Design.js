import React, { Component } from 'react';
import './css/App.scss';
import ProjectCard from './ProjectCard';
import Project from './Project';
import Tiles from './Tiles';

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

    render() {
        return (
            <React.Fragment>
                <Tiles primary="green" />
                <div className="section">
                    <h1>Design</h1>
                    <div className="cards-wrapper grid-xs-1 grid-lg-3">
                        <ProjectCard
                            title="Navigation redesign"
                            tags={['React', 'Design Systems']}
                            description="Redesigned Carta's navigation from scratch."
                            onClick={ () => this.setState({ selectedProjectId: PROJECT_1 })}
                        />
                        <ProjectCard
                            title="VR Timeline"
                            tags={['React', 'Design Systems']}
                            description="Redesigned Carta's navigation from scratch."
                            onClick={ () => this.setState({ selectedProjectId: PROJECT_2 })}
                        />
                        <ProjectCard
                            title="Responsive Components"
                            tags={['React', 'Design Systems']}
                            description="Redesigned Carta's navigation from scratch."
                            onClick={ () => this.setState({ selectedProjectId: PROJECT_3 })}
                        />
                    </div>
                    { this.state.selectedProjectId === PROJECT_1 &&
                        <Project title="Navigation redesign" body={ this.renderBody() } />
                    }
                    { this.state.selectedProjectId === PROJECT_2 &&
                        <Project title="VR Timeline" body={ this.renderBody() } />
                    }
                    { this.state.selectedProjectId === PROJECT_3 &&
                        <Project title="Responsive Components" body={ this.renderBody() } />
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Design;
