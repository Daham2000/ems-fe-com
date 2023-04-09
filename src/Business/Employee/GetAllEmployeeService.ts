import getAxios from '../../db/Axios/index';
import { Convert, IEmployee } from '../../db/Model/Employee';
import { ApiConstants } from "../../Util/ApiContansts";

export const getAllEmployeeService = async (idToken: string): Promise<IEmployee[]> => {
    const instance = await getAxios(idToken);
    let list: IEmployee[] = [];
    try {
        const res = await instance.get(ApiConstants.Announcements);
        list = Convert.toIEmployeeList(JSON.stringify(res.data));
        return list;
    } catch (e) {
        console.log(e);
        return list;
    }
}