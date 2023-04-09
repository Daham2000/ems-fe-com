import getAxios from '../../db/Axios/index';
import { Convert, IHoliday } from '../../db/Model/Holiday';
import { ApiConstants } from "../../Util/ApiContansts";

export const getCompanyHolidayList = async (idToken: string): Promise<IHoliday[]> => {
    const instance = await getAxios(idToken);
    let list: IHoliday[] = [];
    try {
        const res = await instance.get(ApiConstants.Holidays);
        list = Convert.toIHoliday(JSON.stringify(res.data));
        return list;
    } catch (e) {
        console.log(e);
        return list;
    }
}