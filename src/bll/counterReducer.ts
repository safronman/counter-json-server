import {Dispatch} from 'redux';
import api from '../dal/api';
import {CounterActionTypes, IGetInitialValueSuccessAction, IIncrementValueSuccessAction} from '../types/action';
import {RootState} from './store';

export const GET_INITIAL_VALUE = 'counter/counterReducer/GET_INITIAL_VALUE';
export const INCREMENT_VALUE = 'counter/counterReducer/INCREMENT_VALUE';


interface ICounterState {
    value: number
}

const initialState = {
    value: 0
};

const counterReducer = (state: ICounterState = initialState, action: CounterActionTypes): ICounterState => {

    switch (action.type) {
        case GET_INITIAL_VALUE: {
            return {...state, value: action.counterValue}
        }

        case INCREMENT_VALUE: {
            return {...state, value: action.counterValue}
        }

        default:
            return state
    }
};

// Actions
const getInitialValueSuccess = (counterValue: number): IGetInitialValueSuccessAction => {
    return {
        type: GET_INITIAL_VALUE,
        counterValue
    }
};

const incrementValueSuccess = (counterValue: number): IIncrementValueSuccessAction => {
    return {
        type: INCREMENT_VALUE,
        counterValue
    }
};

// Thunks
export const getInitialValue = () => async (dispatch: Dispatch) => {
    let counterValue = await api.getCounterValue();
    dispatch(getInitialValueSuccess(counterValue))
};

export const incrementValue = () => async (dispatch: Dispatch, getState: () => RootState) => {
    let currentValue = getState().counter.value;
    let counterValue = await api.incrementCounterValue(currentValue + 1);
    dispatch(incrementValueSuccess(counterValue))
};

export default counterReducer;
