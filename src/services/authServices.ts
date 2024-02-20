import { connection } from "../config/connection";
import { LOGIN_PATH, REGISTER_PATH } from "../constans/apiPaths";

const API = connection();

export const loginService = async (Correo: string, password: string) => {
    try {
        const response = await API.post(LOGIN_PATH, { Correo, password });
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const registerService = async (Correo: string, password: string) => {
    try {
        const response = await API.post(REGISTER_PATH, { Correo, password });
        return response.data;
    } catch (error) {
        throw error;
    }
}