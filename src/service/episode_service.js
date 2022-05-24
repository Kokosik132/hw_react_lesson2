import {axiosService} from "./axios_service";
import {urls} from "../constants";

export const episodeService = {
    getAll:(page=1) => axiosService.get(urls.episode,{params: {page}})
}