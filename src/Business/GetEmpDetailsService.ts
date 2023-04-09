import { Convert, IEmployee } from "../db/Model/Employee";
import getAxios from '../db/Axios/index';
import { ApiConstants } from "../Util/ApiContansts";

export const getMyDetailsService = async (idToken: string): Promise<IEmployee | number> => {    
    const instance = await getAxios(idToken);
    let emp: IEmployee;
    try {
        const res = await instance.get(ApiConstants.employeeMyDetails);   
        emp = Convert.toIEmployee(JSON.stringify(res.data));
        return emp;
    } catch (e) {
        console.log(e);
        return 401;
    }
}