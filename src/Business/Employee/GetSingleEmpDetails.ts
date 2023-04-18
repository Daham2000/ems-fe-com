import { Convert, IEmployee } from "../../db/Model/Employee";
import getAxios from '../../db/Axios/index';
import { ApiConstants } from "../../Util/ApiContansts";

export const getSingleEmpDetailsService = async (empID: string, idToken: string): Promise<IEmployee> => {
    const instance = await getAxios(idToken);
    console.log(empID);
    
    let emp: IEmployee = {
        _id: "",
        empID: "",
        name: "",
        passwordHash: "",
        userName: "",
        address: "",
        nic: "",
        userRole: "",
        joinedDate: "",
        isAvailable: false,
        jobTitle: "",
        birthDay: "",
        orgID: "",
        contactNum: 0,
        email: "",
        image: "",
        createdAt: new Date(),
        updatedAt: new Date()
    };
    try {
        const res = await instance.get(ApiConstants.employeeSingleDetails, {
            params: {
                empID: empID
            }
        });
        console.log(res);
        
        emp = Convert.toIEmployee(JSON.stringify(res.data));
        return emp;
    } catch (e) {
        console.log(e);
        return emp;
    }
}