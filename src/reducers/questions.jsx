import {
    ADD_ANSWER
} from '../actions/types';

const initialState = {
    multiquestion: []
}

const questionReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case ADD_ANSWER:
            return {
                ...state,
                multiquestion: [...state.multiquestion, payload]
            }
        default: return state;
    }
}

export default questionReducer;