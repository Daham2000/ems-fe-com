import getAxios from '../../db/Axios/index';
import { Convert, IMotivationRequest } from '../../db/Model/MotivationRequest';
import { ApiConstants } from "../../Util/ApiContansts";

export const getMotivationService = async (idToken: string): Promise<IMotivationRequest[]> => {
    const instance = await getAxios(idToken);
    let emp: IMotivationRequest[] = [];
    try {
        const res = await instance.get(ApiConstants.Motivation);
        emp = Convert.toIMotivationRequest(JSON.stringify(res.data));
        return emp;
    } catch (e) {
        console.log(e);
        return emp;
    }
}