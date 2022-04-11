import {axiosService} from "./axios_service";
import {urls} from "../components/constans";

export const usersService = {
    getAll: () => axiosService(urls.users)
}