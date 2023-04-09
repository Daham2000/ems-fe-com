import axios, { AxiosInstance } from 'axios';
import { auth } from '../../firebase';

class AxiosSingleton {
    private static instance: AxiosInstance;

    private constructor() { }

    public static async getInstance(idToken: string): Promise<AxiosInstance> {
        if (!AxiosSingleton.instance) {
            AxiosSingleton.instance = axios.create({
                baseURL: 'http://localhost:8080',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${idToken}`,
                },
            });
        }

        return AxiosSingleton.instance;
    }
}
const getAxios = (idToken: string) => {
    return AxiosSingleton.getInstance(idToken);
}

export default getAxios;
