import {axiosService} from "./axios_service";
import {urls} from "../constants";

export const characterService = {
    getByCharacterList: (characters) => {
        const ids = characters.map(item => item.split('/').slice(-1)[0]).join(',');
        return axiosService.get(`${urls.character}/${ids}`)
    }
}