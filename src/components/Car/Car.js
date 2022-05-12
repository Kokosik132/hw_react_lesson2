import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car ,car:{id,model,price,year}}) => {

    const dispatch = useDispatch();
    const deleteById = () => {
        dispatch(carActions.deleteById({id}))
    }

    return (
        <div>
            {id} -- {model} -- {price} -- {year}
            <button onClick={deleteById}>delete</button>
            <button onClick={() => dispatch(carActions.updateById({id, car}))}>update</button>
        </div>
    );
};

export {Car};