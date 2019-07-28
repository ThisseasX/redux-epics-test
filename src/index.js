import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import { epics } from './epics';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    reducers,
    { counter: 0, buttons: 1 },
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(epics);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
