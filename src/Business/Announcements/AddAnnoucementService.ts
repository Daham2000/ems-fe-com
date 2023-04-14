import getAxios from "../../db/Axios";
import { Announcement } from "../../db/Model/Announcement";
import { ApiConstants } from "../../Util/ApiContansts";

export const addAnnoucementService = async (idToken: string, ann: Announcement): Promise<number> => {
    const instance = await getAxios(idToken);
    const jsonBody = JSON.stringify(ann);
    let obj = JSON.parse(jsonBody);
    
    try {
        const res = await instance.post(ApiConstants.AnnouncementAdd, obj);
        return 201;
    } catch (e) {
        console.log(e);
        return 400;
    }
}