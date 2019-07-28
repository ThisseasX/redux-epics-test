import {
    addButton as addButtonAction,
    incrementCounter as incrementCounterAction
} from './actions';

export const counter = ({ counter }) => ({ counter });
export const buttons = ({ buttons }) => ({ buttons });
export const addButton = dispatch => ({
    addButton: payload => dispatch(addButtonAction(payload))
});
export const incrementCounter = dispatch => ({
    incrementCounter: payload => dispatch(incrementCounterAction(payload))
});
