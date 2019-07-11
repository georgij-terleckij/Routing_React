import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.onTabClick = this.onTabClick.bind(this);
    }

    onTabClick() {
        this.props.handleTabClick(this.props.tabIndex);
    }
    render() {
        const { label, isActive, handleTabClick } = this.props;

        return (
            <button
                style={{ color: isActive ? 'green' : 'black' }}
                onClick={this.onTabClick}
            >
                {label}
            </button>
        );
    }
}

Tab.propTypes = {
    label: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};