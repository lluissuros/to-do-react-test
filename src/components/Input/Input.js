import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ value, onChange}) => (
    <input
        className="Input"
        type="text"
        onChange={onChange}
        value={value}
    />
);

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
};

export default Input;
