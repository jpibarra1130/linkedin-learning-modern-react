import { createSelector } from 'reselect';

// This is a way to abstract how the data is taken from state

export const getTodos = state => state.todos.data;

export const getTodosLoading = state => state.todos.isLoading;

// Takes a variable amount of argument
// The first arguments are all selectors
// Last argument (final function) is the return value of the selector
// Each subsequent argument's result will be the parameter in the 
// last argument function
// createSelector makes sure that a recomputation only happens if the
// state has changed
export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.isCompleted),
);

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted),
);