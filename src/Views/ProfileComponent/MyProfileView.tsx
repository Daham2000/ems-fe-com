import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import StarIcon from "../../assets/starIcon.svg";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import AddPerformanceModel from "../Admin/ManageEmployeeComponent/AddPerformanceModel";
import DashboardTopBar from "../Shared/dashboard-top-bar";

const MyProfileView = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Dataset 1',
                data: [0.5, 0.7, 0.8, 0.87, 0.9, 0.91, 0.89],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ],
    };
    const [showEditPerformanceModel, setShowEditPerformanceModel] = useState(false);
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
    );

    return <div className="d-flex flex-column justify-content-start align-item-start">
        <DashboardTopBar
            isBirthday={false}
            profileUrl="https://nadiazheng.com/wp-content/uploads/2015/12/Montreal-personal-branding-linkedin-profile-professional-headshot-by-nadia-zheng-800x1000.jpg"
            wish={1} />
        <div className="sub-topic-font " style={{ marginTop: "15px" }}>{"Jenny Claraa’s Profile page"}</div>
        <div className="d-flex flex-row">
            <div className="d-flex flex-column" style={{ marginTop: "18px", marginRight: "20px" }}>
                <div className="d-flex flex-row bg-color-white justify-content-between"
                    style={{ borderRadius: "10px", width: "auto", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", paddingBottom: "10px", marginBottom: "15px" }}>
                    <div className="d-flex flex-column align-item-center" style={{ marginRight: "20px" }}>
                        <img height="100px" width="100px"
                            className="circle-div"
                            src={"https://nadiazheng.com/wp-content/uploads/2015/12/Montreal-personal-branding-linkedin-profile-professional-headshot-by-nadia-zheng-800x1000.jpg"} />
                        <div className="d-flex flex-column align-item-center" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                            <div style={{ fontSize: "15px" }}>{"Jenny Claraa"}</div>
                            <div style={{ fontSize: "12px", color: "#808080" }}>{"Product Manager"}</div>
                            <div className="d-flex flex-row justify-content-center" style={{
                                borderRadius: "10px",
                                marginTop: "5px",
                                backgroundColor: "#E0BDF1",
                                width: "110px", height: "15px"
                            }}>
                                <img src={StarIcon} style={{ width: "10px", marginRight: "5px" }} />
                                <div style={{ color: "#B650E6", fontSize: "10px", fontWeight: "bold" }}>Level 2 employee</div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-start align-item-start">
                        <div style={{ marginLeft: "10px", marginBottom: "5px", textAlign: "start", width: "250px", marginRight: "10px", fontSize: "14px", color: "#808080" }}>
                            “I am always capable of identifying the needs of our customers regarding a product”
                        </div>
                        <div className="d-flex flex-column align-item-start" style={{ width: "150px", marginLeft: "10px", marginRight: "10px" }}>
                            <div style={{ fontSize: "12px", color: "#808080", fontWeight: "600" }}>{"Skills"}</div>
                            <div className="d-flex flex-row" style={{ width: "200px" }}>
                                <div className="skill-card">Management</div>
                                <div className="skill-card">Management</div>
                            </div>
                            <div className="d-flex flex-row" style={{ width: "200px" }}>
                                <div className="skill-card">Management</div>
                                <div className="skill-card">Management</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row bg-color-white justify-content-between"
                    style={{ borderRadius: "10px", width: "auto", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", paddingBottom: "10px", marginBottom: "15px" }}>
                    <div className="d-flex flex-column justify-content-start align-item-start"
                        style={{ marginRight: "30px", marginBottom: "15px" }} >
                        <div className="sub-topic-font-two">{"Performance"}</div>
                        <div style={{ color: "black", marginTop: "1px", fontSize: "10px" }}>{"Jul 2022 - Present"}</div>
                        <div style={{ width: "400px", height: "200px" }}>
                            <Line options={options} data={data} />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column bg-color-white justify-content-between"
                    style={{ borderRadius: "10px", width: "auto", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}>
                    <div className="d-flex flex-row justify-content-between" style={{ width: "400px" }}>
                        <div className="d-flex flex-column justify-content-start align-item-start"
                            style={{ marginRight: "30px", marginBottom: "15px" }} >
                            <div className="sub-topic-font-two">{"Performance Reports"}</div>
                            <div style={{ color: "black", marginTop: "1px", fontSize: "10px" }}>{"All Reports"}</div>
                        </div>
                    </div>
                    <div className="d-flex flex-column" style={{ marginTop: "2px", marginBottom: "5px" }}>
                        <div className="d-flex flex-row justify-content-between align-item-center" style={{
                            width: "380px", padding: "5px", height: "25px", borderWidth: "1px", marginBottom: "5px",
                            borderRadius: "4px", borderColor: "#e6e6e6", borderStyle: "solid"
                        }}>
                            <div className="fontStyleReportCardLeft">January Report</div>
                            <div className="fontStyleReportCardRight">2023 Jan 31</div>
                        </div>
                        <div className="d-flex flex-row justify-content-between align-item-center" style={{
                            width: "380px", padding: "5px", height: "25px", borderWidth: "1px", marginBottom: "5px",
                            borderRadius: "4px", borderColor: "#e6e6e6", borderStyle: "solid"
                        }}>
                            <div className="fontStyleReportCardLeft">January Report</div>
                            <div className="fontStyleReportCardRight">2023 Jan 31</div>
                        </div>
                        <div onClick={() => {
                            setShowEditPerformanceModel(true);
                        }} className="d-flex flex-row justify-content-between align-item-center" style={{
                            width: "380px", padding: "5px", height: "25px", borderWidth: "1px", marginBottom: "5px",
                            borderRadius: "4px", borderColor: "#e6e6e6", borderStyle: "solid"
                        }}>
                            <div className="fontStyleReportCardLeft">January Report</div>
                            <div className="fontStyleReportCardRight">2023 Jan 31</div>
                        </div>
                    </div>
                </div>
            </div>

            <AddPerformanceModel
                show={showEditPerformanceModel}
                onHide={() => { setShowEditPerformanceModel(false) }}
            />
        </div>
    </div>;
};

export default MyProfileView;