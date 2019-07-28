import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter } from './props';

const IncrementButton = ({ incrementCounter }) => (
    <button onClick={() => incrementCounter()}>Increment Counter</button>
);

export default connect(
    null,
    dispatch => ({
        ...incrementCounter(dispatch)
    })
)(IncrementButton);
