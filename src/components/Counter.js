import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../redux";

const Counter = () => {

    const {count1, count2} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Count1: {count1}</h1>
            <button onClick={() => dispatch(counterActions.incCount1())}>INC</button>
            <button onClick={() => dispatch(counterActions.decCount1())}>Dec</button>
            <button onClick={() => dispatch(counterActions.reset1())}>Reset</button>
            <h1>Count2: {count2}</h1>
            <button onClick={() => dispatch(counterActions.incCount2())}>INC</button>
            <button onClick={() => dispatch(counterActions.decCount2())}>Dec</button>
            <button onClick={() => dispatch(counterActions.reset2())}>Reset</button>


        </div>
    );
};

export {Counter};