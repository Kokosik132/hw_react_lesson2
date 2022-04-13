import React, {useEffect, useState} from 'react';
import {carService} from "../../service/car_service";
import {Car} from "../Car/Car";

const Cars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    return (
        <div>
            {cars.map(car => <Car key={cars.id} car={car}/>)}
        </div>
    );
};

export {Cars};