import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {catActions} from "../../redux/slice";

const FormCat = () => {
    const [name, setName] = useState('');

    const dispatch = useDispatch();

    const save = () => {
        dispatch(catActions.add({name}));
        setName('');
    }


    return (
        <div>
            <label><input type="text"
                          onChange={(e) => setName(e.target.value)}
                          value={name}/></label>
            <button onClick={save}>Save</button>
        </div>
    );
};

export {FormCat};


