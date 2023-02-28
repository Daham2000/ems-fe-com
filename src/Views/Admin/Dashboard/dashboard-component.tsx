import DashboardBtn from "../../Shared/dashboard-btn";
import { Routes, Route } from "react-router-dom";
import DashboardView from "./dashboard-view"; 
import { useState } from "react";
import ManageEmployeeComponent from "../ManageEmployeeComponent/manage-emp-component";
import { useNavigate } from 'react-router-dom';

const AdminDashboardComponent = () => {

    const [currentPage, setCurrentPage] = useState("dashboard");
    const navigate = useNavigate();

    return <div className="d-flex d-flex-row bg-color-grey" style={{ height: "100vh" }}>
        <div className="d-flex d-flex-column bg-color-white" style={{ width: "200px" }}>
            <div style={{ height: "50px" }} />
            <div className="d-flex d-flex-column">
                <DashboardBtn isClicked={currentPage === "dashboard"} onClick={() => {
                    setCurrentPage("dashboard");
                    navigate("/dashboard-admin");
                }} title="Dashboard" />
                <DashboardBtn isClicked={currentPage === "profile"} onClick={() => {
                    setCurrentPage("profile");
                    navigate(`profile`);
                }} title="My Profile" />
                <DashboardBtn isClicked={currentPage === "emp"} onClick={() => {
                    setCurrentPage("emp");
                    navigate("/dashboard-admin/manage-emoloyee");
                }} title="Manage Employees" />
                <DashboardBtn isClicked={currentPage === "announcement"} onClick={() => {
                    setCurrentPage("announcement");
                    navigate("/dashboard-admin/announcements");
                }} title="Announcement" />
                <DashboardBtn isClicked={currentPage === "help"} onClick={() => {
                    setCurrentPage("help");
                    navigate("/dashboard-admin/help");
                }} title="Help Center" />
                <DashboardBtn isClicked={currentPage === "settings"} onClick={() => {
                    setCurrentPage("settings");
                    navigate("/dashboard-admin/settings");
                }} title="Settings" />
            </div>
        </div>

        <div style={{ padding: "10px", marginLeft: "10px", width: "82vw" }} >
            <Routes>
                <Route path={"/"} element={<DashboardView />} />
                <Route path={`profile`} element={<DashboardView />} />
                <Route path='/manage-emoloyee' element={<ManageEmployeeComponent />} />
                <Route path='/announcements' element={<DashboardView />} />
                <Route path='/help' element={<DashboardView />} />
                <Route path='/settings' element={<DashboardView />} />
            </Routes>
        </div>
    </div>;
};

export default AdminDashboardComponent;

function useRouteMatch(): { path: any; url: any; } {
    throw new Error("Function not implemented.");
}
