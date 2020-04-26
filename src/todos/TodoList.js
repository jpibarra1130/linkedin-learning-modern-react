import React, { useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';
import styled from 'styled-components';
import TodoListItem from "./TodoListItem";
import { loadTodos, removeTodoRequest, completeTodoRequest } from './thunks';
import { 
    getTodosLoading,
    getCompletedTodos,
    getIncompleteTodos, } from './selectors';

// The duble back ticks here (``) is called tag functions
const ListWrapper = styled.div`
    max-width: 700px;
    margin: auto;
`;

const TodoList = ({ completedTodos, incompleteTodos, onRemovePressed, onCompletePressed, isLoading, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, []);
    
    const loadingMessage = <div>Loading todos...</div>
    
    const content = (
        <ListWrapper>
            <NewTodoForm />
            <h3>Incomplete:</h3>
            {incompleteTodos.map(todo => <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}
                />)}
            <h3>Completed:</h3>
            {completedTodos.map(todo => <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}
                />)}
        </ListWrapper>
        );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    isLoading: getTodosLoading(state),
    completedTodos: getCompletedTodos(state),
    incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = dispatch => ({
    startLoadingTodos: () => dispatch(loadTodos()),
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: text => dispatch(completeTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);