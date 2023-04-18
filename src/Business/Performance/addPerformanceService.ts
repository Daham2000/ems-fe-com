import getAxios from "../../db/Axios";
import { ApiConstants } from "../../Util/ApiContansts";
import { PerformanceReport } from "../../db/Model/PerformanceReport";

export const addPerformanceReport = async (idToken: string, performance: PerformanceReport): Promise<number> => {
    const instance = await getAxios(idToken);
    try {
        const res = await instance.post(ApiConstants.Performance, JSON.stringify(performance));
        console.log(res);
        return 201;
    } catch (e) {
        console.log(e);
        return 400;
    }
}