import { handleActions } from 'redux-actions';
import { addButton, incrementCounter } from './actions';

export const reducers = handleActions(
    {
        [addButton]: state => ({ ...state, buttons: state.buttons + 1 }),
        [incrementCounter]: state => ({
            ...state,
            counter: state.counter + 1
        })
    },
    {}
);
