import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionsCat} from "../../redux";

const FormCat = () => {

    const [name, setName] = useState('');

    const {CatForUpdate} = useSelector(({cats}) => cats);
    const dispatch = useDispatch();

    useEffect(() => {
        if (CatForUpdate) {
            setName(CatForUpdate.name)
        }
    }, [CatForUpdate])

    const save = () => {
        if (CatForUpdate) {
        dispatch(actionsCat.updateCat({name, id: CatForUpdate.id}));
        } else {
            dispatch(actionsCat.addCat({name}))
        }

        setName('')
    }

    return (
        <div>
            <label>Cat:<input type="text" onChange={(event) => setName(event.target.value)} value={name}/></label>
            <button onClick={save}>save</button>
        </div>
    );
};

export {FormCat};