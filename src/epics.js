import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';
import { mapTo, tap } from 'rxjs/operators';
import { addButton, incrementCounter } from './actions';

const addButtonEpic = action$ =>
    action$.pipe(
        ofType(addButton),
        tap(({ payload }) =>
            console.log('I AM THE FIRST EPIC', addButton().type, payload)
        ),
        mapTo({ type: 'NO_OP' })
    );

const incrementCounterEpic = action$ =>
    action$.pipe(
        ofType(incrementCounter),
        tap(({ payload }) =>
            console.log(
                'I AM THE SECOND EPIC',
                incrementCounter().type,
                payload
            )
        ),
        mapTo({ type: 'NO_OP' })
    );

export const epics = combineEpics(incrementCounterEpic, addButtonEpic);
