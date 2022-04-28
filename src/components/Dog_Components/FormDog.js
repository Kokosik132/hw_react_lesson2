import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {dogActions} from "../../redux/slice";

const FormDog = () => {
    const nameInputdog = useRef();
    const dispatch = useDispatch();

    return (
        <div>
            <input type="text" ref={nameInputdog}/>
            <button onClick={() => dispatch(dogActions.add({dog:nameInputdog.current.value}))}>Save</button>
        </div>
    );
};

export {FormDog};