import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {catActions} from "../../redux/slice";

const FormCat = () => {
    const nameInputCat = useRef();
    const dispatch = useDispatch();
    
    return (
        <div>
            <input type="text" ref={nameInputCat}/>
            <button onClick={()=> dispatch(catActions.add({cat:nameInputCat.current.value}))}>Save</button>
        </div>
    );
};

export {FormCat};