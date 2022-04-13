import {axiosService} from "./axios_service";
import {urls} from "../constans";

export const carService = {
    getAll: () => axiosService.get(urls.cars), // get витягуємо
    getById:(id) => axiosService.get(`${urls.cars}/${id}`), // Витягуємо по ID
    create: (car) => axiosService.post(urls.cars, car), // post записуємо
    updateById: (id, newCar) => axiosService.put(`${urls.cars}/${id}`, newCar), // оновлюємо по ID
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`) // delete видаляємо
}