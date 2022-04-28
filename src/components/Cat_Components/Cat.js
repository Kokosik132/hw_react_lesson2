import React from 'react';
import {useDispatch} from "react-redux";
import {catActions} from "../../redux/slice";

const Cat = ({cat}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {cat.name} -- {cat.id}
            <button onClick={() => dispatch(catActions.deleteCat({ id: cat.id }))}>delete</button>
        </div>
    );
};

export {Cat};