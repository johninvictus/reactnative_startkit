/**
 *
 ***/

import * as types from '../actions/types';

const INITIAL_STATE = {
    example: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case types.EXAMPLE:
            return {
                ...INITIAL_STATE,
                example: 'Hello World'
            };

        default:
            return state;
    }
}
