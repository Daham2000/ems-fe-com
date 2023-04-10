import getAxios from '../../db/Axios/index';
import { Convert, IEmployee } from '../../db/Model/Employee';
import { ApiConstants } from "../../Util/ApiContansts";

export const getAllEmployeeService = async (idToken: string): Promise<IEmployee[]> => {
    const instance = await getAxios(idToken);
    let list: IEmployee[] = [];
    try {
        const res = await instance.get(ApiConstants.Employees);
        list = Convert.toIEmployeeList(JSON.stringify(res.data));
        return list;
    } catch (e) {
        console.log(e);
        return list;
    }
}

export const addEmployeeService = async (idToken: string, employee: IEmployee): Promise<number> => {
    const instance = await getAxios(idToken);
    try {
        const res = await instance.post(ApiConstants.Employees, Convert.iEmployeeToJson(employee));
        console.log(res);
        return 201;
    } catch (e) {
        console.log(e);
        return 409;
    }
}