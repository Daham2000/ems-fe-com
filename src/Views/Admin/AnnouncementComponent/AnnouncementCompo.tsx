import DashboardTopBar from "../../Shared/dashboard-top-bar";
import { Form } from "react-bootstrap";
import ButtonComponent from "../../Shared/button-component";
import AnnoucementCard from "./AnnouncementCard";
import AddAnnouncementModel from "./AddAnnouncementModel";
import { useState } from "react";

const AnnouncementCompo = () => {
    const [showDialog, setShowDialog] = useState(false);

    return <div className="d-flex flex-column justify-content-start align-item-start">
        <DashboardTopBar
            isBirthday={false}
            profileUrl="https://nadiazheng.com/wp-content/uploads/2015/12/Montreal-personal-branding-linkedin-profile-professional-headshot-by-nadia-zheng-800x1000.jpg"
            wish={1} />
        <div className="sub-topic-font " style={{ marginTop: "15px" }}>{"Announcement"}</div>

        <div className="d-flex flex-row justify-content-start align-item-start" style={{ marginTop: "10px" }}>
            <Form.Control
                type="text"
                style={{ height: '30px', marginRight: "4px" }}
                id="userName"
                aria-describedby="passwordHelpBlock"
            />
            <button onClick={() => { }} className="topic-font bg-color-white"
                style={{ width: '95px', marginRight: "10px", border: "none", height: '30px', fontSize: '12px', paddingRight: '25px', paddingLeft: '26px', padding: '3px', borderRadius: '3px' }}>{"Search"}</button>
            <ButtonComponent width={"138px"} text="Create Announcement" onClick={() => {
                setShowDialog(true);
            }} />
        </div>

        <div className="d-flex flex-column justify-content-start align-item-start">
            <div style={{ height: "10px" }} />
            <AnnoucementCard />
            <AnnoucementCard />
            <AnnoucementCard />
        </div>

        <AddAnnouncementModel
            show={showDialog}
            onHide={() => setShowDialog(false)}
        />
    </div>;
}

export default AnnouncementCompo;