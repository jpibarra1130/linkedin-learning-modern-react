import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store';

import App from './App.js';

const store = configureStore();

// can potentially cause a permacrash
// -> just delete it in DevTools > Application > Local Storage > persist:root
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store} >
        <PersistGate 
            loading={<div>Loading...</div>}
            persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>, 
    document.getElementById('root')
);
