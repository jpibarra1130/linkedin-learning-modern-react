import React, { useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import TodoListItem from "./TodoListItem";
import { loadTodos, removeTodoRequest, completeTodoRequest } from './thunks';
import './TodoList.css';

const TodoList = ({ todos = [], onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>
    
    const content = (
        <div className="list-wrapper">
            <NewTodoForm />
            {todos.map(todo => <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}
                />)}
            </div>);
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: text => dispatch(completeTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);