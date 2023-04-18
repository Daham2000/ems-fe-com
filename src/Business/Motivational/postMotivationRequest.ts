import getAxios from "../../db/Axios";
import { ApiConstants } from "../../Util/ApiContansts";
import { PerformanceReport } from "../../db/Model/PerformanceReport";

export const postMotivationRequest = async (idToken: string, empId: string, message: string): Promise<number> => {
    const instance = await getAxios(idToken);
    console.log(empId);
    
    try {
        const res = await instance.post(ApiConstants.Motivation, JSON.stringify({
            empId: empId,
            description: message
        }));
        console.log(res);
        return 201;
    } catch (e) {
        console.log(e);
        return 400;
    }
}