import DashboardBtn from "../Shared/dashboard-btn";
import DashboardTopBar from "../Shared/dashboard-top-bar";
import BoxImportantIcon from "../../assets/box-important.svg";
import { WhiteButtonComponent } from "../Shared/button-component";
import WrapTextComponent from "../Shared/wrap-text-component";
import DotIcon from "../../assets/dot-icon.svg";
import DotIconRed from "../../assets/dot-red.svg";

const AdminDashboardComponent = () => {
    return <div className="d-flex d-flex-row bg-color-grey" style={{ height: "100vh" }}>
        <div className="d-flex d-flex-column bg-color-white" style={{ width: "200px" }}>
            <div style={{ height: "50px" }} />
            <div className="d-flex d-flex-column">
                <DashboardBtn isClicked={true} title="Dashboard" />
                <DashboardBtn isClicked={false} title="My Profile" />
                <DashboardBtn isClicked={false} title="Manage Employees" />
                <DashboardBtn isClicked={false} title="Announcement" />
                <DashboardBtn isClicked={false} title="Help Center" />
                <DashboardBtn isClicked={false} title="Settings" />
            </div>
        </div>

        <div className="d-flex d-flex-column" style={{ padding: "10px", marginLeft: "10px", width: "82vw" }} >
            <DashboardTopBar
                isBirthday={true}
                profileUrl="https://nadiazheng.com/wp-content/uploads/2015/12/Montreal-personal-branding-linkedin-profile-professional-headshot-by-nadia-zheng-800x1000.jpg"
                wish={1} />


            <div className="d-flex d-flex-column button-color" style={{
                padding: "20px",
                marginTop: "15px",
                width: "84vw", height: "200px", borderRadius: "6px"
            }}>
                <div className="d-flex d-flex-row">
                    <WrapTextComponent text={" 5 Unread Announcements"} icon={DotIcon} />
                </div>

                <div className="d-flex d-flex-row justify-content-between">
                    <div className="box-white-bold">{"Short survey for this month team gathering"}</div>
                    <WrapTextComponent text={" Announcement"} icon={BoxImportantIcon} />
                </div>

                <p className="box-white-normal" style={{ marginBottom: "1px" }}>It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

                <a href="" className="box-white-normal">{"https://www.google.com"}</a>

                <div className="d-flex d-flex-row justify-content-end">
                    <WhiteButtonComponent text="See all Announcements" onClick={() => {

                    }} />
                </div>
            </div>

            <div className="d-flex d-flex-column bg-color-white align-item-start" style={{
                width: "500px",
                marginTop: "10px",
                padding: "15px",
                borderRadius: "10px", height: "250px"
            }}>
                <img src={DotIconRed} height={"10px"} style={{ color: "Red" }} />
            </div>
        </div>
    </div>;
};

export default AdminDashboardComponent;