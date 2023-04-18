import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import { Constants } from "../../../Util/constant";
import { Employee } from "../../../db/Model/Employee";
import { addEmployeeService } from "../../../Business/Employee/AddEmployeeService";

function AddEmployeeModel(props: any) {
    const today = new Date();
    const [joinedDate, setJoinedDate] = useState(new Date());
    const [birthDay, setBirthDay] = useState(new Date());
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nic, setNic] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [contactNum, setContactNum] = useState<number>(0);
    const [userRole, setUserRole] = useState("");
    const [image, setImage] = useState("");

    const saveEmployee = async () => {
        let employee: Employee = {
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
            contactNum: contactNum,
            email: email,
            image: image
        };
        props.onSave(employee);
    }

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
                        <Form.Control type="text" placeholder="Enter Full name" onChange={(event) => {
                            setFullName(event.target.value);
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>User name</Form.Label>
                        <Form.Control type="text" placeholder="Enter User name" onChange={(event) => {
                            setUserName(event.target.value);
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter Address" onChange={(event) => {
                            setAddress(event.target.value);
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(event) => {
                            setEmail(event.target.value);
                        }} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(event) => {
                            setPassword(event.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNic">
                        <Form.Label>NIC</Form.Label>
                        <Form.Control type="text" placeholder="Enter NIC number" onChange={(event) => {
                            setNic(event.target.value);
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicJobTitle">
                        <Form.Label>Job title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Job Title" onChange={(event) => {
                            setJobTitle(event.target.value);
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNic">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control type="text" placeholder="Enter Image URL" onChange={(event) => {
                            setImage(event.target.value);
                        }} />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicContactNum">
                        <Form.Label>Contact number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Contact number" onChange={(event) => {
                            setContactNum(Number(event.target.value));
                        }} />
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
                            selected={birthDay}
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
                        <Form.Select value={userRole} onChange={(event) => {
                            setUserRole(event.target.value);
                        }} aria-label="Default select example">
                            {
                                Constants.UserRoles.map((role) => {
                                    return <option id={role}>{role}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" onClick={() => { saveEmployee(); }}>
                        Add
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default AddEmployeeModel;