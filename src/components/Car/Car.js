import React from 'react';
import {carService} from "../../service/car_service";

const Car = ({car, setDeletedCarid}) => {
    const {id, year, price, model} = car;
    const deleteCar = async () => {
         await carService.deleteById(id)
         setDeletedCarid(id)
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <div>model: {model}</div>
            <br/>
            <button onClick={()=> {deleteCar()}}>delete</button>
        </div>
    );
};

export {Car};