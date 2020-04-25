import { 
    loadTodosInProgress, 
    removeTodo, 
    completeTodo,
    loadTodosSuccess, 
    loadsTodosFailure, 
    createTodo } from './actions';

// two (optional) arguments are passed to a thunk
// dispatch helps dispatch an action
// getState helps us get access to 
// the current state of the redux store
export const loadTodos = () => async (dispatch, getState) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();

        dispatch(loadTodosSuccess(todos));
    } catch (error) {
        dispatch(loadsTodosFailure());
        dispatch(displayAlert(e));
    }
};

export const addTodoRequest = text =>  async dispatch => {
    try {
        const body = JSON.stringify({ text });
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-TYpe': 'application/json',
            },
            method: 'post',
            body,
        })

        const todo = await response.json();
        dispatch(createTodo(todo));
    } catch (error) {
        dispatch(displayAlert(error));
    }
};

export const completeTodoRequest = id =>  async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            headers: {
                'Content-TYpe': 'application/json',
            },
            method: 'post',
        })

        const updatedTodo = await response.json();
        dispatch(completeTodo(updatedTodo));
    } catch (error) {
        dispatch(displayAlert(error));
    }
};

export const removeTodoRequest = id =>  async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            headers: {
                'Content-TYpe': 'application/json',
            },
            method: 'delete',
        })

        const removedTodo = await response.json();
        dispatch(removeTodo(removedTodo));
    } catch (error) {
        dispatch(displayAlert(error));
    }
};

export const displayAlert = text => () => {
    alert(`Failure! ${text}`);
};