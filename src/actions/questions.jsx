import {
    ADD_ANSWER
} from './types';

export const addAnswer = (step, question, answer) =>async(dispatch) => {
    const data = {step, question, answer};

    console.log("data = ", data);

    dispatch({
        type: ADD_ANSWER,
        payload: data
    })
}