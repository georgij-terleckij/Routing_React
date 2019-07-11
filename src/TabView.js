import React, { Component } from 'react';
import Tabs from './components/tab/Tabs';
import Content from './components/tab/Content';

export default class TabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabIndex: 0,
            initialData: [
                {
                    label: 'Tab 1',
                    content: 'Content 1',
                },
                {
                    label: 'Tab 2',
                    content: 'Content 2',
                },
                {
                    label: 'Tab 3',
                    content: 'Content 3',
                },
            ],
        };
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(index) {
        this.setState({
            activeTabIndex: index,
        });
    }

    render() {
        const { initialData, activeTabIndex } = this.state;
        const activeItem = this.state.initialData[activeTabIndex];
        return (
            <div>
                <Tabs
                    handleTabClick={this.handleTabClick}
                    data={this.state.initialData}
                    activeTabIndex={activeTabIndex}
                />
                <Content content={activeItem.content} />
            </div>
        );
    }
}
