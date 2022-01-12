import React from 'react';
import PropTypes from 'prop-types';

/**
 * Icon component to get and render app icons
 * @param {Object} props Component properties
 * @returns {React.Component} Icon component
 */
const Icon = props => {
    if (props.name === '') {
        return null;
    }

    try {
        const Image = require(`./stock/${props.name}`).default;

        if (Image) {
            return (
                <Image
                    aria-label={props.name}
                    className={`icon ${props.className}`}
                    {...props}
                />
            );
        }
        return null;
    } catch (error) {
        console.error('Icon not found', error);
        return null;
    }
};

Icon.defaultProps = {
    className: ''
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default Icon;
