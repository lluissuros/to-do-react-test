import React from 'react';
import PropTypes from 'prop-types';
import './TodosList.css';
import TodoItem from '../TodoItem';

const TodosList = (props) => (
    <div className="TodosList">
        {props.todos.map(item => <TodoItem key={item.id} value={item.value} />)}
    </div>
);

TodosList.propTypes = {
    todos: PropTypes.array.isRequired
};

export default TodosList;
