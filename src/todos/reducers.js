import { CREATE_TODO, REMOVE_TODO, COMPLETE_TODO } from './actions';

// anytime an action is called, this is triggered
// it will receive the action AND payload
// redux will be expecting this reducer to return a payload 
// to set the state to
export const todos = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
    case CREATE_TODO: {
        const { text } = payload;
        const newTodo = {
            text,
            isCompleted: false,
        };

        // this does not mutate the state
        return state.concat(newTodo);
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

    // always need to have a default to return an unchanged state
    default:
        return state;
    }
}