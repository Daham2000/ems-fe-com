import DashboardTopBar from "../../Shared/dashboard-top-bar";
import { Form } from "react-bootstrap";
import ButtonComponent from "../../Shared/button-component";
import EmployeeCard from "./EmployeeCard";
import { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import EditEmployeeComponent from "./EditEmployeeComponent";
import StarIcon from "../../../assets/starIcon.svg";
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
import { Chart, Line } from 'react-chartjs-2';
import AddEmployeeModel from "./ModelAddEmpComponent";
import AddPerformanceModel from "./AddPerformanceModel";
import { connect } from "react-redux";
import { JwtPayloadType } from "../../../Util/decodeToken";
import { ActionTypes } from "../../../store/actionType";
import { Employee, IEmployee } from "../../../db/Model/Employee";
import { getAllEmployeeService } from "../../../Business/Employee/GetAllEmployeeService";
import { ToastContainer, toast } from "react-toastify";
import { addEmployeeService } from "../../../Business/Employee/AddEmployeeService";
import { Constants } from "../../../Util/constant";
import { IPerformanceReport } from "../../../db/Model/PerformanceReport";
import { getPerformanceReportService } from "../../../Business/Performance/getPerformanceService";

export const SingleEmplyeeView = (props: any) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const [showAddPerformanceModel, setShowAddPerformanceModel] = useState(false);
    const [showEditPerformanceModel, setShowEditPerformanceModel] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState<IEmployee>(props.emp);
    const [performanceReport, setPerformanceReport] = useState<IPerformanceReport[]>([]);
    const [labels, setLabels] = useState<string[]>(["Jan"]);
    const [data, setData] = useState<any>({
        labels,
        datasets: [
            {
                fill: true,
                label: 'Dataset 1',
                data: [3],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            }
        ],
    });

    useEffect(() => {
        getData();
    }, []);

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

    const getData = async () => {
        const list = await getPerformanceReportService(props.idToken, props.emp.empID);
        setLabels(list.map((obj) => {
            return obj.month;
        }));
        setData({
            labels,
            datasets: [
                {
                    fill: true,
                    label: 'Dataset 1',
                    data: list.map((obj) => {
                        return obj.overviewRate
                    }),
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.5)',
                }
            ],
        });
        setPerformanceReport(list);
    }

    const findEmpTitle = (role: string) => {
        switch (role) {
            case Constants.AdminRole:
                return Constants.adminTitle;
            case Constants.QaRole:
                return Constants.qaTitle;
            case Constants.BaRole:
                return Constants.baTitle;
            case Constants.PmRole:
                return Constants.pmTitle;
            case Constants.devRole:
                return Constants.devTitle;
        }
    }

    const findEmpDes = (role: string) => {
        switch (role) {
            case Constants.AdminRole:
                return Constants.adminDescription;
            case Constants.QaRole:
                return Constants.qaDescription;
            case Constants.BaRole:
                return Constants.baDescription;
            case Constants.PmRole:
                return Constants.pmDescription;
            case Constants.devRole:
                return Constants.devDescription;
        }
    }

    const getSkillList = (role: string) => {
        switch (role) {
            case Constants.AdminRole:
                return Constants.QaRoleSkills.map((skill) => {
                    return <div id={skill} className="skill-card">{skill}</div>
                })
            case Constants.QaRole:
                return Constants.QaRoleSkills.map((skill) => {
                    return <div id={skill} className="skill-card">{skill}</div>
                })
            case Constants.BaRole:
                return Constants.BaRoleSkills.map((skill) => {
                    return <div id={skill} className="skill-card">{skill}</div>
                })
            case Constants.PmRole:
                return Constants.PmRoleSkills.map((skill) => {
                    return <div id={skill} className="skill-card">{skill}</div>
                })
            case Constants.devRole:
                return Constants.DevRoleSkills.map((skill) => {
                    return <div id={skill} className="skill-card">{skill}</div>
                })
        }
    }

    return (
        <div className="d-flex flex-row">
            <div className="d-flex flex-column" style={{ marginTop: "18px", marginRight: "20px" }}>
                <div className="d-flex flex-row bg-color-white justify-content-between"
                    style={{ borderRadius: "10px", width: "auto", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", paddingBottom: "10px", marginBottom: "15px" }}>
                    <div className="d-flex flex-column align-item-center" style={{ marginRight: "20px" }}>
                        <img height="100px" width="100px"
                            className="circle-div"
                            src={selectedEmployee?.image} />
                        <div className="d-flex flex-column align-item-center" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                            <div style={{ fontSize: "15px" }}>{selectedEmployee?.name}</div>
                            <div style={{ fontSize: "12px", color: "#808080" }}>{findEmpTitle(selectedEmployee?.userRole ?? "")}</div>
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
                            {findEmpDes(selectedEmployee?.userRole ?? "")}
                        </div>
                        <div className="d-flex flex-column align-item-start" style={{ width: "150px", marginLeft: "10px", marginRight: "10px" }}>
                            <div style={{ fontSize: "12px", color: "#808080", fontWeight: "600" }}>{"Skills"}</div>
                            <div className="grid-container">
                                {getSkillList(selectedEmployee?.userRole ?? "")}
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
                            {<Line options={options} data={{
                                labels: performanceReport.reverse().map((obj) => {
                                    return obj.month
                                }),
                                datasets: [
                                    {
                                        fill: true,
                                        label: 'Dataset 1',
                                        data: performanceReport.reverse().map((obj) => {
                                            return obj.overviewRate
                                        }),
                                        borderColor: 'rgb(53, 162, 235)',
                                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                                    }
                                ],
                            }} redraw={true} />}
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
                        <ButtonComponent text="Add Performance report" onClick={() => {
                            setShowAddPerformanceModel(true);
                        }} />
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
                            setShowAddPerformanceModel(true);
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
            <EditEmployeeComponent style={{ marginTop: "28px" }} />
        </div>
    );
}