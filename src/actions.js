import { createActions } from 'redux-actions';

const ADD_BUTTON = 'ADD_BUTTON';
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

export const { addButton, incrementCounter } = createActions(
    ADD_BUTTON,
    INCREMENT_COUNTER
);
