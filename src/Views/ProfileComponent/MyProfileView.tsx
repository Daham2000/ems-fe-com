import { useEffect, useState } from "react";
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
import DashboardTopBar from "../Shared/dashboard-top-bar";
import { getPerformanceReportService } from "../../Business/Performance/getPerformanceService";
import { Constants } from "../../Util/constant";
import { IPerformanceReport } from "../../db/Model/PerformanceReport";
import { IEmployee } from "../../db/Model/Employee";
import { capitalizeFirstLetter, getDashboardDateTime } from "../../Util/UtilityService";
import { ActionTypes } from "../../store/actionType";
import { connect } from "react-redux";

const MyProfileView = (props: any) => {
    const [labels, setLabels] = useState<string[]>(["Jan"]);
    const [user, setUser] = useState<IEmployee>(props.myDetails);
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
    const [performanceReport, setPerformanceReport] = useState<IPerformanceReport[]>([]);

    useEffect(() => {
        getData();
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
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

    const getData = async () => {
        const list = await getPerformanceReportService(props.idToken, user.empID);
        setLabels(list.map((obj) => {
            return obj.month;
        }));
        setData({
            labels,
            datasets: [
                {
                    fill: true,
                    label: 'Dataset 1',
                    data: list.reverse().map((obj) => {
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

    return <div className="d-flex flex-column justify-content-start align-item-start">
        <DashboardTopBar
            isBirthday={false}
            profileUrl="https://nadiazheng.com/wp-content/uploads/2015/12/Montreal-personal-branding-linkedin-profile-professional-headshot-by-nadia-zheng-800x1000.jpg"
            wish={1} />
        <div className="sub-topic-font " style={{ marginTop: "15px" }}>{user?.name + "'s Profile page"}</div>        <div className="d-flex flex-row">
            <div className="d-flex flex-column" style={{ marginTop: "18px", marginRight: "20px" }}>
                <div className="d-flex flex-row bg-color-white justify-content-between"
                    style={{ borderRadius: "10px", width: "auto", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", paddingBottom: "10px", marginBottom: "15px" }}>
                    <div className="d-flex flex-column align-item-center" style={{ marginRight: "20px" }}>
                        <img height="100px" width="100px"
                            className="circle-div"
                            src={user?.image} />
                        <div className="d-flex flex-column align-item-center" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                            <div style={{ fontSize: "15px" }}>{user?.name}</div>
                            <div style={{ fontSize: "12px", color: "#808080" }}>{findEmpTitle(user?.userRole ?? "")}</div>
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
                            {findEmpDes(user?.userRole ?? "")}
                        </div>
                        <div className="d-flex flex-column align-item-start" style={{ width: "150px", marginLeft: "10px", marginRight: "10px" }}>
                            <div style={{ fontSize: "12px", color: "#808080", fontWeight: "600" }}>{"Skills"}</div>
                            <div className="grid-container">
                                {getSkillList(user?.userRole ?? "")}
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
                                labels: performanceReport.map((obj) => {
                                    return obj.month
                                }),
                                datasets: [
                                    {
                                        fill: true,
                                        label: 'Dataset 1',
                                        data: performanceReport.map((obj) => {
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
                    </div>
                    <div className="d-flex flex-column" style={{ marginTop: "2px", marginBottom: "5px" }}>
                        {
                            performanceReport.map((per) => {
                                return (
                                    <div className="d-flex flex-row justify-content-between align-item-center" style={{
                                        width: "380px", padding: "5px", height: "25px", borderWidth: "1px", marginBottom: "5px",
                                        borderRadius: "4px", borderColor: "#e6e6e6", borderStyle: "solid"
                                    }}>
                                        <div className="fontStyleReportCardLeft">{per.year + " " + capitalizeFirstLetter(per.month) + " Report"}</div>
                                        <div className="fontStyleReportCardRight">{getDashboardDateTime(per.createdAt.toString())}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

const mapStateToProps = (state: any) => {
    return {
        idToken: state.idToken,
        user: state.user,
        myDetails: state.myDetails
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        saveMyDetails: (myDetails: IEmployee) => dispatch({
            type: ActionTypes.SAVE_MY_DETAILS,
            payload: { myDetails }
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileView);