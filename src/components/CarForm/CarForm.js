import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../service";

const CarForm = ({setNewCar}) => {
    const {register, reset, handleSubmit} = useForm();
    const [formError, setFormError] = useState([]);

    const mySubmit = async (car) => {
        try {
            const {data} = await carService.create(car);
            setNewCar(data)
            reset()
        } catch (e) {
            setFormError(e.response.data)
        }
    }
    return (
        <form onSubmit={handleSubmit(mySubmit)}>
            <div><label>Model: <input type="text" {...register('model')}/></label></div>
            {formError.model && <span>{formError.model[0]}</span>}
            <div><label>Price: <input type="number" {...register('price', {valueAsNumber: true})}/></label></div>
            {formError.model && <span>{formError.price[0]}</span>}
            <div><label>Year: <input type="number" {...register('year', {valueAsNumber: true})}/></label></div>
            {formError.model && <span>{formError.year[0]}</span>}
            <button>saves</button>
        </form>
    );
};

export {CarForm};