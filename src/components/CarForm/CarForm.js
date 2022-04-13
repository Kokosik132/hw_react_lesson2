import {useForm} from "react-hook-form";
import {carService} from "../../service/car_service";

const CarForm = ({setNewCar}) => {
    const {register, reset, handleSubmit} = useForm();

    const mySubmit = async (car) => {
        const {data} = await carService.create(car);
        setNewCar(data)
        reset()


    }

    return (
        <div>
            <form onSubmit={handleSubmit(mySubmit)}>
                <div><label>Model: <input type="text"{...register('model')}/></label></div>
                <div><label>Price: <input type="text"{...register('price')}/></label></div>
                <div><label>Year: <input type="text"{...register('year')}/></label></div>
                <button>save</button>
            </form>
        </div>
    );
};

export {CarForm};