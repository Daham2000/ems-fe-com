import DashboardBtn from "../../Shared/dashboard-btn";
import { Routes, Route } from "react-router-dom";
import DashboardView from "./dashboard-view";
import { useEffect, useState } from "react";
import ManageEmployeeComponent from "../ManageEmployeeComponent/manage-emp-component";
import { useNavigate } from 'react-router-dom';
import AnnouncementCompo from "../AnnouncementComponent/AnnouncementCompo";
import MyProfileView from "../../ProfileComponent/MyProfileView";
import MotivationView from "../../MotivationView/MotivationView";
import { connect } from "react-redux";
import { JwtPayloadType } from "../../../Util/decodeToken";
import { ActionTypes } from "../../../store/actionType";
import { getMyDetailsService } from "../../../Business/Employee/GetEmpDetailsService";

const AdminDashboardComponent = (props: any) => {

    const [currentPage, setCurrentPage] = useState("dashboard");
    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    return <div className="d-flex d-flex-row bg-color-grey" style={{ height: "100vh" }}>
        <div className="d-flex d-flex-column bg-color-white" style={{ width: "200px" }}>
            <div style={{ height: "50px" }} />
            <div className="d-flex d-flex-column">
                <DashboardBtn isClicked={currentPage === "dashboard"} onClick={() => {
                    setCurrentPage("dashboard");
                    navigate("/dashboard-admin");
                }} title="Dashboard" />
                {!props.user.admin ? <DashboardBtn isClicked={currentPage === "profile"} onClick={() => {
                    setCurrentPage("profile");
                    navigate(`profile`);
                }} title="My Profile" /> : <></>}
                {props.user.admin ? <DashboardBtn isClicked={currentPage === "emp"} onClick={() => {
                    setCurrentPage("emp");
                    navigate("/dashboard-admin/manage-emoloyee");
                }} title="Manage Employees" /> : <></>}
                <DashboardBtn isClicked={currentPage === "announcement"} onClick={() => {
                    setCurrentPage("announcement");
                    navigate("/dashboard-admin/announcements");
                }} title="Announcement" />
                <DashboardBtn isClicked={currentPage === "help"} onClick={() => {
                    setCurrentPage("help");
                    navigate("/dashboard-admin/help");
                }} title="Motivation Page" />
                <DashboardBtn isClicked={currentPage === "settings"} onClick={() => {
                    setCurrentPage("settings");
                    navigate("/dashboard-admin/settings");
                }} title="Settings" />
            </div>
        </div>

        <div style={{ padding: "10px", marginLeft: "10px", width: "82vw" }} >
            <Routes>
                <Route path={"/"} element={<DashboardView />} />
                <Route path={`/profile`} element={<MyProfileView />} />
                <Route path='/manage-emoloyee' element={<ManageEmployeeComponent />} />
                <Route path='/announcements' element={<AnnouncementCompo />} />
                <Route path='/help' element={<MotivationView />} />
                <Route path='/settings' element={<DashboardView />} />
            </Routes>
        </div>
    </div>;
};

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

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboardComponent);