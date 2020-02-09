import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {RootState} from '../bll/store';
import {getInitialValue, incrementValue} from '../bll/counterReducer';

interface IMapStateProps {
    value: number
}

interface IMapDispatchProps {
    getInitialValue: () => void
    incrementValue: () => void
}

type IProps = IMapStateProps & IMapDispatchProps


let Counter = (props: IProps) => {

    useEffect(() => {
        props.getInitialValue()
    }, []);

    return (
        <div>
            <h1>Counter</h1>
            <h2>value: {props.value}</h2>
            <button onClick={()=> props.incrementValue()}>Increment value</button>
        </div>

    )
};

const mapStateToProps = (state: RootState): IMapStateProps => {
    return {
        value: state.counter.value
    }
};

export default connect(mapStateToProps, {getInitialValue, incrementValue})(Counter);
