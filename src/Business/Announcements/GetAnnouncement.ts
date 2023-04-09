import getAxios from '../../db/Axios/index';
import { Convert, IAnnouncement } from '../../db/Model/Announcement';
import { ApiConstants } from "../../Util/ApiContansts";

export const getCompanyAnnoucements = async (idToken: string): Promise<IAnnouncement[]> => {
    const instance = await getAxios(idToken);
    let emp: IAnnouncement[] = [];
    try {
        const res = await instance.get(ApiConstants.Announcements);
        emp = Convert.toIAnnouncement(JSON.stringify(res.data));
        return emp;
    } catch (e) {
        console.log(e);
        return emp;
    }
}