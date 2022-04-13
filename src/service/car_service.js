import {axiosService} from "./axios_service";
import {urls} from "../constans";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    create: () => axiosService.post(urls.cars)
}