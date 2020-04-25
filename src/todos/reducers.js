import { 
    CREATE_TODO, 
    REMOVE_TODO, 
    COMPLETE_TODO,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
 } from './actions';

 export const isLoading = (state = false, action) => {
    const { type } = action;

    switch (type) {
        case LOAD_TODOS_IN_PROGRESS:
            return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }
 };

// anytime an action is called, this is triggered
// it will receive the action AND payload
// redux will be expecting this reducer to return a payload 
// to set the state to
export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { todo } = payload;
        
        // this does not mutate the state
        return state.concat(todo);
    }
    case REMOVE_TODO: {
        const { text } = payload;
        return state.filter(todo => todo.text !== text);
    }

    case COMPLETE_TODO: {
        const { text } = payload;
        return state.map(todo => {
            if (todo.text === text) {
                return { ...todo, isCompleted: true };
            }
            return todo;
        });
    }

    case LOAD_TODOS_SUCCESS: {
        const { todos } = payload;
        return todos;
    }
    
    case LOAD_TODOS_IN_PROGRESS: 
    case LOAD_TODOS_FAILURE:
    
    // always need to have a default to return an unchanged state
    default:
        return state;
    }
}