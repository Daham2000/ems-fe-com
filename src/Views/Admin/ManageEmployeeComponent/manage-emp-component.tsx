import DashboardTopBar from "../../Shared/dashboard-top-bar";
import { Form } from "react-bootstrap";
import ButtonComponent from "../../Shared/button-component";
import EmployeeCard from "./EmployeeCard";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
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
import { Line } from 'react-chartjs-2';

function MyVerticallyCenteredModal(props: any) {
    const today = new Date();
    const [joinedDate, setJoinedDate] = useState(new Date());
    const [birthDay, setBirthDay] = useState(new Date());

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add An Employee
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full name" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="text" placeholder="Enter User name" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNic">
                        <Form.Label>NIC</Form.Label>
                        <Form.Control type="text" placeholder="Enter NIC number" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicJobTitle">
                        <Form.Label>Job title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Job Title" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicContactNum">
                        <Form.Label>Contact number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Contact number" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="validationFormik03">
                        <Form.Label>Joined Date</Form.Label>

                        <DatePicker
                            selected={joinedDate}
                            onChange={(e) => {
                                setJoinedDate(e ?? new Date());
                            }}
                            className="form-control"
                            minDate={today}
                            customInput={
                                <input
                                    type="text"
                                    id="joinedDate"
                                    placeholder="Enter Joined Date of Employee"
                                />
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="validationFormik03">
                        <Form.Label>Birth Day</Form.Label>

                        <DatePicker
                            selected={joinedDate}
                            onChange={(e) => {
                                setBirthDay(e ?? new Date());
                            }}
                            className="form-control"
                            minDate={today}
                            customInput={
                                <input
                                    type="text"
                                    id="birthDayId"
                                    placeholder="Enter Birthday of Employee"
                                />
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Select User Role</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>User Role</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
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

const ManageEmployeeComponent = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [openedEmployee, setOpenedEmployee] = useState(false);

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
        <div className="sub-topic-font " style={{ marginTop: "15px" }}>{!openedEmployee ? "Manage Employees" : "Jenny Claraa’s Profile page"}</div>
        {
            !openedEmployee ? <>
                <div className="d-flex flex-row justify-content-start align-item-start" style={{ marginTop: "10px" }}>
                    <Form.Control
                        type="text"
                        style={{ height: '30px', marginRight: "4px" }}
                        id="userName"
                        aria-describedby="passwordHelpBlock"
                    />
                    <button onClick={() => { }} className="topic-font bg-color-white"
                        style={{ width: '95px', marginRight: "10px", border: "none", height: '30px', fontSize: '12px', paddingRight: '25px', paddingLeft: '26px', padding: '3px', borderRadius: '3px' }}>{"Search"}</button>
                    <ButtonComponent text="Add Employee" onClick={() => {
                        setShowDialog(true);
                    }} />
                </div>
                <div className="d-flex flex-column" style={{ marginTop: "10px" }}>
                    <EmployeeCard onClick={() => {
                        setOpenedEmployee(true);
                    }} />
                    <EmployeeCard onClick={() => {
                        setOpenedEmployee(true);
                    }} />
                    <EmployeeCard onClick={() => {
                        setOpenedEmployee(true);
                    }} />
                    <EmployeeCard onClick={() => {
                        setOpenedEmployee(true);
                    }} />
                    <EmployeeCard onClick={() => {
                        setOpenedEmployee(true);
                    }} />
                </div>
            </> : <div className="d-flex flex-row">
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
                            <ButtonComponent text="Add Performance report" onClick={() => {
                                setShowDialog(true);
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
                            <div className="d-flex flex-row justify-content-between align-item-center" style={{
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
        }

        <MyVerticallyCenteredModal
            show={showDialog}
            onHide={() => setShowDialog(false)}
        />
    </div>;
};

export default ManageEmployeeComponent;