import getAxios from '../../db/Axios/index';
import { Convert, IPerformanceReport } from '../../db/Model/PerformanceReport';
import { ApiConstants } from "../../Util/ApiContansts";

export const getPerformanceReportService = async (idToken: string, empID: string): Promise<IPerformanceReport[]> => {
    const instance = await getAxios(idToken);
    let list: IPerformanceReport[] = [];
    try {
        const res = await instance.get(ApiConstants.Performance, {
            params: {
                empID: empID
            }
        });
        list = Convert.toIPerformanceReport(JSON.stringify(res.data));
        return list;
    } catch (e) {
        console.log(e);
        return list;
    }
}