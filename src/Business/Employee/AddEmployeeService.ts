import getAxios from "../../db/Axios";
import { ApiConstants } from "../../Util/ApiContansts";
import { Convert, Employee } from "../../db/Model/Employee";

export const addEmployeeService = async (idToken: string, employee: Employee): Promise<number> => {
    const instance = await getAxios(idToken);
    try {
        const res = await instance.post(ApiConstants.Employees, JSON.stringify(employee));
        console.log(res);
        return 201;
    } catch (e) {
        console.log(e);
        return 409;
    }
}