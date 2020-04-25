import { createStore, combineReducers, applyMiddleware } from 'redux';
// helps persist the store even after browser refresh
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// side-effect library to separate side-effects
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos } from './todos/reducers';

const reducers = {
    todos,
};

const rootReducer = combineReducers(reducers);

// how to store and persist our data
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);