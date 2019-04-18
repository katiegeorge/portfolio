import React, { Component } from 'react';
import About from './About';
import Code from './Code';
import Design from './Design';
import Contact from './Contact';
import Tab from './Tab';

import './App.scss';
import headshot from './headshot.png';

export const ABOUT_TAB = 'about-tab';
export const DESIGN_TAB = 'design-tab';
export const CODE_TAB = 'code-tab';
export const CONTACT_TAB = 'contact-tab';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTabId: ABOUT_TAB,
            hovered: [],
        }
    }

    isActive(id) {
        return this.state.selectedTabId === id;
    }

    setActiveTab(selectedTabId) {
        this.setState({ selectedTabId });
    }

   tabClassNames(id) {
        if (id === ABOUT_TAB) { return 'nav--item__1'; }
        else if (id === CODE_TAB) { return 'nav--item__2'; }
        else if (id === DESIGN_TAB) { return 'nav--item__3'; }
        else if (id === CONTACT_TAB) { return 'nav--item__4'; }
    };

    render() {
        const tabs = [
            {
                label: 'About',
                id: ABOUT_TAB,
            },
            {
                label: 'Code',
                id: CODE_TAB,
            },
            {
                label: 'Design',
                id: DESIGN_TAB,
            },
            {
                label: 'Contact',
                id: CONTACT_TAB,
            },
        ];

        return (
            <div className="app">
                <div className="nav">
                    { tabs.map((tab, i) => {
                        const tabClassNames = (
                            this.isActive(tab.id) ? `nav--item ${this.tabClassNames(tab.id)} ${this.tabClassNames(tab.id)}__active` : `nav--item ${this.tabClassNames(tab.id)}`
                        );
                        return (
                            <Tab
                                label={ tab.label }
                                isActive={ this.isActive(tab.id) }
                                onActiveTab={ this.setActiveTab.bind(this, tab.id) }
                                key={ i }
                                className={ tabClassNames }
                            />
                        );
                    }) }
                </div>
                { this.state.selectedTabId === ABOUT_TAB && <About /> }
                { this.state.selectedTabId === CODE_TAB && <Code /> }
                { this.state.selectedTabId === DESIGN_TAB && <Design /> }
                { this.state.selectedTabId === CONTACT_TAB && <Contact /> }
            </div>
        );
    }
}

export default App;
