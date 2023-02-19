import DashboardBtn from "../Shared/dashboard-btn";

const AdminDashboardComponent = () => {
    return <div className="d-flex d-flex-row bg-color-grey" style={{ height: "100vh" }}>
        <div className="d-flex d-flex-column bg-color-white" style={{ width: "200px" }}>
            <div style={{ height: "50px" }} />
            <div className="d-flex d-flex-column">
                <DashboardBtn isClicked={true} title="Dashboard"/>
                <DashboardBtn isClicked={false} title="My Profile"/>
                <DashboardBtn isClicked={false} title="Manage Employees"/>
                <DashboardBtn isClicked={false} title="Announcement"/>
                <DashboardBtn isClicked={false} title="Help Center"/>
                <DashboardBtn isClicked={false} title="Settings"/>
            </div>
        </div>
    </div>;
};

export default AdminDashboardComponent;