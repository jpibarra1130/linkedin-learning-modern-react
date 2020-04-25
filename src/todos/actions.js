export const CREATE_TODO = 'CREATE_TODO';

// we need to have an argument `text` here to receive the payload
// once this action is triggered
// this is called `action creators`
// best practice is to use action creators instead of bare actions
export const createTodo = todo => ({
    type: CREATE_TODO,
    payload: { todo },
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = todo => ({
    type: REMOVE_TODO,
    payload: { todo },
});

export const COMPLETE_TODO = 'COMPLETE_TODO';
export const completeTodo = text => ({
    type: COMPLETE_TODO,
    payload: { text },
});

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = () => ({
    type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = todos => ({
    type: LOAD_TODOS_SUCCESS,
    payload: { todos },
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadsTodosFailure = () => ({
    type: LOAD_TODOS_FAILURE,
});