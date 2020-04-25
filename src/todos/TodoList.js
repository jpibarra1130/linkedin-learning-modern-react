import React from 'react';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import { removeTodo, completeTodo } from './actions';
import { displayAlert } from './thunks';
import TodoListItem from "./TodoListItem";
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map(todo => <TodoListItem 
            todo={todo} 
            onRemovePressed={onRemovePressed}
            onCompletePressed={onCompletePressed}
            />)}
    </div>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);