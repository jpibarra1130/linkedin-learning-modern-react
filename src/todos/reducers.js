import { 
    CREATE_TODO, 
    COMPLETE_TODO,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE,
    REMOVE_TODO,
 } from './actions';

const initialState = { isLoading: false, date: [] }

// anytime an action is called, this is triggered
// it will receive the action AND payload
// redux will be expecting this reducer to return a payload 
// to set the state to
export const todos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { todo } = payload;
        
        // this does not mutate the state
        return {
            ...state,
            data: state.data.concat(todo),
        };
    }
    case COMPLETE_TODO: {
        const { todo: updatedTodo } = payload;
        return {
            ...state,
            data: state.data.map(todo => {
                if (todo.id === updatedTodo.id) {
                    return { ...todo, isCompleted: true };
                }
                return todo;
            }),
        };
    }

    case REMOVE_TODO: {
        const { todo: todoToRemove } = payload;
        return {
            ...state,
            data: state.data.filter(todo => todo.id !== todoToRemove.id)
        };
    }
    case LOAD_TODOS_SUCCESS: {
        const { todos } = payload;
        return {
            ...state,
            isLoading: false,
            data: todos,
        };
    }
    
    case LOAD_TODOS_IN_PROGRESS: {
        return {
            ...state,
            isLoading: true,
        }
    }
    case LOAD_TODOS_FAILURE: {
        return {
            ...state,
            isLoading: false,
        }
    }
    
    // always need to have a default to return an unchanged state
    default:
        return state;
    }
}