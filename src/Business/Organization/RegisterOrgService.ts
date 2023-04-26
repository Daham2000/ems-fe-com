import getAxios from "../../db/Axios";
import { ApiConstants } from "../../Util/ApiContansts";
import { PerformanceReport } from "../../db/Model/PerformanceReport";

export const registerOrgService = async (idToken: string, name: string, tag: string, email: string): Promise<number> => {
    const instance = await getAxios(idToken);
    try {
        const res = await instance.post(ApiConstants.Register, JSON.stringify({
            name: name,
            email: email,
            tag: tag
        }));
        console.log(res);
        return 201;
    } catch (e) {
        console.log(e);
        return 400;
    }
}