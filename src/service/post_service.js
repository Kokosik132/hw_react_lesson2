import {axiosService} from "./axios_service";
import {urls} from "../constans";

export const postService = {
    getAll:() => axiosService.get(urls.posts),
    getById:(id) => axiosService.get(`${urls.posts}/${id}`),
    getByUserId:(id) => axiosService.get(`${urls.users}/${id}/posts`)
}