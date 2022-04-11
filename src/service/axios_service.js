import axios from "axios";
import baseURL from "../components/constans/links";

export const axiosService = axios.create({baseURL});