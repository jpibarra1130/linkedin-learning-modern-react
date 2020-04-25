import { loadTodosInProgress, loadTodosSuccess, loadsTodosFailure } from './actions';

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

export const displayAlert = text => () => {
    alert(`Failure! ${text}`);
};