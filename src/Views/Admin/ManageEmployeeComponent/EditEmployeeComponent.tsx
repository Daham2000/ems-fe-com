import { Form } from "react-bootstrap";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Constants } from "../../../Util/constant";
import { connect } from "react-redux";
import { IEmployee } from "../../../db/Model/Employee";
import { updateEmpService } from "../../../Business/Employee/UpdateEMpService";
import { ToastContainer, toast } from "react-toastify";

const EditEmployeeComponent = (props: any) => {
    const today = new Date();
    const [joinedDate, setJoinedDate] = useState(new Date(props.emp.joinedDate));
    const [birthDay, setBirthDay] = useState(new Date(props.emp.birthDay));
    const [fullName, setFullName] = useState(props.emp.name);
    const [userName, setUserName] = useState(props.emp.userName);
    const [address, setAddress] = useState(props.emp.address);
    const [email, setEmail] = useState(props.emp.email);
    const [password, setPassword] = useState(props.emp.passwordHash);
    const [nic, setNic] = useState(props.emp.nic);
    const [jobTitle, setJobTitle] = useState(props.emp.jobTitle);
    const [contactNum, setContactNum] = useState<number>(props.emp.contactNum);
    const [userRole, setUserRole] = useState(props.emp.userRole);
    const [image, setImage] = useState(props.emp.image); 

    const saveAction = async () => {
        const idToken = props.idToken;
        const employee: IEmployee = {
            _id: props.emp._id,
            empID: props.emp.empID,
            name: fullName,
            passwordHash: password,
            userName: userName,
            address: address,
            nic: nic,
            userRole: userRole,
            joinedDate: joinedDate.toString(),
            isAvailable: true,
            jobTitle: jobTitle,
            birthDay: birthDay.toString(),
            orgID: props.emp.orgID,
            contactNum: contactNum,
            email: email,
            image: image,
            createdAt: props.emp.createdAt,
            updatedAt: props.emp.updatedAt
        };
        const res = await updateEmpService(idToken, employee);
        if (res === 201) {
            toast.success("Report updated...");
        } else {
            toast.error("Report can't update...");
        }
    }

    return <div>
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

        <Form className="grid-layout">
            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicEmail">
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full name" defaultValue={props.emp.name} onChange={(event) => {
                    setFullName(event.target.value);
                }} />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicUserName">
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" defaultValue={props.emp.userName} placeholder="Enter User name" onChange={(event) => {
                    setUserName(event.target.value);
                }} />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" defaultValue={props.emp.address} placeholder="Enter Address" onChange={(event) => {
                    setAddress(event.target.value);
                }} />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" defaultValue={props.emp.email} placeholder="Enter email" onChange={(event) => {
                    setEmail(event.target.value);
                }} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" defaultValue={props.emp.passwordHash} placeholder="Password" onChange={(event) => {
                    setPassword(event.target.value);
                }} />
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicNic">
                <Form.Label>NIC</Form.Label>
                <Form.Control type="text" defaultValue={props.emp.nic} placeholder="Enter NIC number" onChange={(event) => {
                    setNic(event.target.value);
                }} />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicJobTitle">
                <Form.Label>Job title</Form.Label>
                <Form.Control type="text" defaultValue={props.emp.jobTitle} placeholder="Enter Job Title" onChange={(event) => {
                    setJobTitle(event.target.value);
                }} />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicContactNum">
                <Form.Label>Contact number</Form.Label>
                <Form.Control type="number" defaultValue={props.emp.contactNum} placeholder="Enter Contact number" onChange={(event) => {
                    setContactNum(Number(event.target.value));
                }} />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>


            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicContactNum">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" defaultValue={props.emp.image} placeholder="Enter image url" onChange={(event) => {
                    setImage(event.target.value);
                }} />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="validationFormik03">
                <Form.Label>Joined Date</Form.Label>

                <DatePicker
                    selected={joinedDate}
                    onChange={(e) => {
                        setJoinedDate(e ?? new Date());
                    }}
                    value={props.emp.joinedDate}
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

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="validationFormik03">
                <Form.Label>Birth Day</Form.Label>

                <DatePicker
                    selected={birthDay}
                    onChange={(e) => {
                        setBirthDay(e ?? new Date());
                    }}
                    value={props.emp.birthDay}
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

            <Form.Group className="mb-3 d-flex flex-column align-item-start">
                <Form.Label>Select User Role</Form.Label>
                <Form.Select defaultValue={props.emp.userRole} onChange={(event) => {
                    setUserRole(event.target.value);
                }} aria-label="Default select example">
                    {
                        Constants.UserRoles.map((role) => {
                            return <option id={role}>{role}</option>
                        })
                    }
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" onClick={() => {
                saveAction();
            }}>
                Save
            </Button>
        </Form>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployeeComponent);