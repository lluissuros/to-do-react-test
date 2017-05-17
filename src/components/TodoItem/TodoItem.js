import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = ({ value }) => (
    <div className="TodoItem">{value}</div>
);

TodoItem.propTypes = {
    value: PropTypes.string.isRequired
};

export default TodoItem;
