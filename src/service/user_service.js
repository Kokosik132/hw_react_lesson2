import {axiosService} from "./axios_service";
import {urls} from "../constans";

export const userService = {
    getAll: () => axiosService.get(urls.users),
    getById: (id) => axiosService.get(`${urls.users}/${id}`)
}