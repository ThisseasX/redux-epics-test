import React, { Fragment } from 'react';
import IncrementButton from './IncrementButton';
import { connect } from 'react-redux';
import { counter, buttons, addButton } from './props';

const App = ({ counter = 0, buttons = 0, addButton }) => (
    <Fragment>
        <h1>Counter: {counter}</h1>
        <button onClick={e => addButton(e.currentTarget.nodeName)}>
            Add Button
        </button>
        {Array(buttons)
            .fill()
            .map((_, i) => (
                <IncrementButton key={i} />
            ))}
    </Fragment>
);

export default connect(
    state => ({
        ...counter(state),
        ...buttons(state)
    }),
    dispatch => ({
        ...addButton(dispatch)
    })
)(App);
