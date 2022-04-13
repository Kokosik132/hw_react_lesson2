import React, {useEffect, useState} from 'react';
import {carService} from "../../service/car_service";
import {Car} from "../Car/Car";

const Cars = ({newCar}) => {
    const [cars, setCars] = useState([]);
    const [deletedCarId, setDeletedCarid] = useState([]);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [])

    useEffect(()=> {
        if (newCar) {
            setCars(prevState => [...prevState,newCar])
        }
        if (deletedCarId) {
            setCars(cars.filter(car => car.id !== deletedCarId))

        }
    },[newCar, deletedCarId])



    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setDeletedCarid={setDeletedCarid}/>)}
        </div>
    );
};

export {Cars};