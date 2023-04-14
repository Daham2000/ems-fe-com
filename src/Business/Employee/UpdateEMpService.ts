import getAxios from "../../db/Axios";
import { IEmployee } from "../../db/Model/Employee";
import { ApiConstants } from "../../Util/ApiContansts";

export const updateEmpService = async (idToken: string, employee: IEmployee): Promise<number> => {
    const instance = await getAxios(idToken);
    const jsonBody = JSON.stringify(employee);
    let obj = JSON.parse(jsonBody);
    delete obj["createdAt"];
    delete obj["updatedAt"];

    try {
        const res = await instance.patch(ApiConstants.Employees, obj);
        return 201;
    } catch (e) {
        console.log(e);
        return 400;
    }
}