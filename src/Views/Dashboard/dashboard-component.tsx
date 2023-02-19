import DashboardBtn from "../Shared/dashboard-btn";

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

        <div className="d-flex d-flex-column" style={{ padding: "10px", width: "85vw" }} >
            <div className="d-flex d-flex-row justify-content-between align-item-between" style={{ width: "85vw" }}>
                <div className="d-flex d-flex-column align-item-start">
                    <div className="sub-topic-font">Good mornning !</div>
                    <div className="sub-topic-font" style={{ fontSize: "11px" }}>27 th Jan, Friday</div>
                    <div className="topic-font" style={{ fontStyle: "italic", fontSize: "10px", paddingTop: "6px" }}>All growth depends upon activity.</div>
                </div>
                <img height="35px" width="35px"
                    className="circle-div"
                    src="https://nadiazheng.com/wp-content/uploads/2015/12/Montreal-personal-branding-linkedin-profile-professional-headshot-by-nadia-zheng-800x1000.jpg" />
            </div>

            <div className="d-flex d-flex-column align-item-end" style={{ width: "85vw" }}>
                <div className="d-flex d-flex-row birthday-wish-msg" style={{width: "250px"}}>
                    <div>Happy Birthday Jenny-See your wish</div>
                </div>
            </div>
        </div>
    </div>;
};

export default AdminDashboardComponent;