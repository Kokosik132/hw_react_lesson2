import React from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../service";

const CarForm = ({setNewCar}) => {
    const {register, reset, handleSubmit} = useForm();

    const mySubmit = async (car) => {
       const {data} = await carService.create(car);
        setNewCar(data)
    }
    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            <div><label>Price: <input type="number" {...register('price', {valueAsNumber: true})}/></label></div>
            <div><label>Year: <input type="number" {...register('year', {valueAsNumber: true})}/></label></div>
            <button>save</button>
        </form>
    );
};

export {CarForm};