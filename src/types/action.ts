// ACTION TYPES
import {GET_INITIAL_VALUE, INCREMENT_VALUE} from '../bll/counterReducer';

export interface IGetInitialValueSuccessAction {
    type: typeof GET_INITIAL_VALUE
    counterValue: number
}

export interface IIncrementValueSuccessAction {
    type: typeof INCREMENT_VALUE
    counterValue: number
}

export type CounterActionTypes = IGetInitialValueSuccessAction | IIncrementValueSuccessAction
