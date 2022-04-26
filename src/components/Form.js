import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {userActions} from "../redux";

const Form = () => {
    const nameInput = useRef();
    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" ref={nameInput}/>
            <button onClick={()=>dispatch(userActions.add({user:nameInput.current.value}))}>Click</button>
        </div>
    );
};

export {Form};