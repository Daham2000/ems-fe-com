import getAxios from "../../db/Axios";
import { IPerformanceReport, IPerformanceReportUpdate } from "../../db/Model/PerformanceReport";
import { ApiConstants } from "../../Util/ApiContansts";

export const updatePerformanceReport = async (idToken: string, performance: IPerformanceReport): Promise<number> => {
    const instance = await getAxios(idToken);
    const jsonBody = JSON.stringify(performance);
    let obj = JSON.parse(jsonBody);
    delete obj["overviewRate"];
    delete obj["perId"];
    console.log(performance._id);
    
    try {
        const res = await instance.patch(ApiConstants.Performance, obj);
        console.log(res);
        return 201;
    } catch (e) {
        console.log(e);
        return 400;
    }
}