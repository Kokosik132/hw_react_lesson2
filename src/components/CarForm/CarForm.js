import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {

    const {reset, register, handleSubmit} = useForm();

    const submit = (car) => {

    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model:<input type="text"{...register('Model')}/></label></div>
                <div><label>Price<input type="text"{...register('Price')}/></label></div>
                <div><label>Year<input type="text"{...register('Year')}/></label></div>
                <button>save</button>
            </form>
        </div>
    );
};

export {CarForm};