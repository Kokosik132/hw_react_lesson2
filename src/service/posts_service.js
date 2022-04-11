import {axiosService} from "./axios_service";
import {urls} from "../components/constans";

export const postsService = {
    getPostsByUserId: (id) => axiosService(`${urls.posts}?userId=${id}`)
}