import DashboardTopBar from "../../Shared/dashboard-top-bar";
import { Form } from "react-bootstrap";
import ButtonComponent from "../../Shared/button-component";
import AnnoucementCard from "./AnnouncementCard";
import AddAnnouncementModel from "./AddAnnouncementModel";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { JwtPayloadType } from "../../../Util/decodeToken";
import { ActionTypes } from "../../../store/actionType";
import { getCompanyAnnoucements } from "../../../Business/Announcements/GetAnnouncement";
import { Announcement, IAnnouncement } from "../../../db/Model/Announcement";
import { addAnnoucementService } from "../../../Business/Announcements/AddAnnoucementService";
import { ToastContainer, toast } from "react-toastify";

const AnnouncementCompo = (props: any) => {
    const [showDialog, setShowDialog] = useState(false);
    const [annuncements, setAnnuncement] = useState<IAnnouncement[]>([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const token = props.idToken;
            const list = await getCompanyAnnoucements(token);
            setAnnuncement(list);
        } catch (e) {
            console.log(e);
        }
    }

    const addAnnouncementAction = async (annoucementTitle: string, annoucementDes: string, sendTo: string) => {
        try {
            const annoucement: Announcement = {
                announcementTitle: annoucementTitle,
                message: annoucementDes,
                sendBy: "Director board",
                sendTo: sendTo,
                date: new Date().toString(),
            }
            const res = await addAnnoucementService(props.idToken, annoucement);
            if (res === 201) {
                toast.success("Annoucement added...");
            } else {
                toast.error("Annoucement can't update...");
            }
        } catch (e) {

        }
    }

    return <div className="d-flex flex-column justify-content-start align-item-start">
        <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
        <DashboardTopBar
            isBirthday={false}
            profileUrl="https://nadiazheng.com/wp-content/uploads/2015/12/Montreal-personal-branding-linkedin-profile-professional-headshot-by-nadia-zheng-800x1000.jpg"
            wish={1} />
        <div className="sub-topic-font " style={{ marginTop: "15px" }}>{"Announcement"}</div>

        <div className="d-flex flex-row justify-content-start align-item-start" style={{ marginTop: "10px" }}>
            <Form.Control
                type="text"
                style={{ height: '30px', marginRight: "4px" }}
                id="search"
                aria-describedby="passwordHelpBlock"
            />
            <button onClick={() => { }} className="topic-font bg-color-white"
                style={{ width: '95px', marginRight: "10px", border: "none", height: '30px', fontSize: '12px', paddingRight: '25px', paddingLeft: '26px', padding: '3px', borderRadius: '3px' }}>{"Search"}</button>
            {props.user.admin ? <ButtonComponent width={"138px"} text="Create Announcement" onClick={() => {
                setShowDialog(true);
            }} /> : <></>}
        </div>

        <div className="d-flex flex-column justify-content-start align-item-start">
            <div style={{ height: "10px" }} />
            {
                annuncements.map((ann) => {
                    return (<AnnoucementCard annuncements={ann} />);
                })
            }
        </div>

        {props.user.admin ? <AddAnnouncementModel
            show={showDialog}
            onSave={addAnnouncementAction} 
            onHide={() => setShowDialog(false)}
        /> : <></>}
    </div>;
}

const mapStateToProps = (state: any) => {
    return {
        idToken: state.idToken,
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateUserDetails: (idToken: string, user: JwtPayloadType) => dispatch({
            type: ActionTypes.SAVE_USER_DETAILS,
            payload: { idToken, user }
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCompo);