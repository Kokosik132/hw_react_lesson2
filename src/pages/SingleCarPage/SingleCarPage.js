import React, {useEffect, useState} from 'react';
import {CarDetail} from "../../components";
import {useLocation, useParams} from "react-router-dom";
import {carService} from "../../service";

const SingleCarPage = () => {

    const [car,setCar] = useState(null);
    const {state} = useLocation();
    const {carId} = useParams();

    useEffect(()=>{
        if (state){
           setCar(state)
        }else {
            carService.getById(carId).then(({data}) => setCar(data));
        }
    },[])
    return (
        <div>
            {
                car && <CarDetail car={car}/>
            }
        </div>
    );
};

export  {SingleCarPage};