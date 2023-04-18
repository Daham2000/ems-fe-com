import DashboardTopBar from "../../Shared/dashboard-top-bar";
import { Form } from "react-bootstrap";
import ButtonComponent from "../../Shared/button-component";
import EmployeeCard from "./EmployeeCard";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import AddEmployeeModel from "./ModelAddEmpComponent";
import AddPerformanceModel from "./AddPerformanceModel";
import { connect } from "react-redux";
import { JwtPayloadType } from "../../../Util/decodeToken";
import { ActionTypes } from "../../../store/actionType";
import { Employee, IEmployee } from "../../../db/Model/Employee";
import { getAllEmployeeService } from "../../../Business/Employee/GetAllEmployeeService";
import { ToastContainer, toast } from "react-toastify";
import { addEmployeeService } from "../../../Business/Employee/AddEmployeeService";
import { IPerformanceReport } from "../../../db/Model/PerformanceReport";
import { getPerformanceReportService } from "../../../Business/Performance/getPerformanceService";
import { SingleEmplyeeView } from "./SingleEmpView";

export const options = {
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

const ManageEmployeeComponent = (props: any) => {
    const [showDialog, setShowDialog] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showAddPerformanceModel, setShowAddPerformanceModel] = useState(false);
    const [showEditPerformanceModel, setShowEditPerformanceModel] = useState(false);
    const [openedEmployee, setOpenedEmployee] = useState(false);
    const [employeeList, setEmployeeList] = useState<IEmployee[]>([]);
    const [selectedEmployee, setSelectedEmployee] = useState<IEmployee>();
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
        if (employeeList.length === 0) {
            getData();
        }
    }, []);

    const getData = async () => {
        const token = props.idToken;
        const list = await getAllEmployeeService(token);
        setEmployeeList(list);
    }

    const saveEmployee = async (employee: Employee) => {
        const res = await addEmployeeService(props.IdToken, employee);
        if (res === 201) {
            toast.success("Employee Added and email send to the employee.");
            setShowDialog(false);
        } else {
            toast.error("Employee added unsuccesfull. please try again.");
        }
    }




    return <div className="d-flex flex-column justify-content-start align-item-start">
        <DashboardTopBar
            isBirthday={false}
            profileUrl="https://nadiazheng.com/wp-content/uploads/2015/12/Montreal-personal-branding-linkedin-profile-professional-headshot-by-nadia-zheng-800x1000.jpg"
            wish={1} />
        <div className="sub-topic-font " style={{ marginTop: "15px" }}>{!openedEmployee ? "Manage Employees" : selectedEmployee?.name + "'s Profile page"}</div>
        {
            !openedEmployee ? <>
                <div className="d-flex flex-row justify-content-start align-item-start" style={{ marginTop: "10px" }}>
                    <Form.Control
                        type="text"
                        style={{ height: '30px', marginRight: "4px" }}
                        id="search"
                        onChange={() => {

                        }}
                        aria-describedby="passwordHelpBlock"
                    />
                    <button onClick={() => { }} className="topic-font bg-color-white"
                        style={{ width: '95px', marginRight: "10px", border: "none", height: '30px', fontSize: '12px', paddingRight: '25px', paddingLeft: '26px', padding: '3px', borderRadius: '3px' }}>{"Search"}</button>
                    <ButtonComponent text="Add Employee" onClick={() => {
                        setShowDialog(true);
                    }} />
                </div>
                <div className="d-flex flex-column" style={{ marginTop: "10px" }}>
                    {
                        employeeList.map((obj) => {
                            return <EmployeeCard key={obj._id} emp={obj} onClick={async () => {
                                setIsLoading(true);
                                setSelectedEmployee(obj);
                                setOpenedEmployee(true);
                                const list = await getPerformanceReportService(props.idToken, obj.empID);
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
                                setIsLoading(false);
                            }} />;
                        })
                    }
                </div>
            </> : <SingleEmplyeeView emp={selectedEmployee}/>
        }

        <AddEmployeeModel
            show={showDialog}
            idToken={props.idToken}
            onSave={(emp: Employee) => {
                saveEmployee(emp)
            }}
            onHide={() => setShowDialog(false)}
        />

        <AddPerformanceModel
            show={showAddPerformanceModel}
            isEdit={showEditPerformanceModel}
            onHide={() => { setShowAddPerformanceModel(false); setShowEditPerformanceModel(false) }}
        />

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

export default connect(mapStateToProps, mapDispatchToProps)(ManageEmployeeComponent);