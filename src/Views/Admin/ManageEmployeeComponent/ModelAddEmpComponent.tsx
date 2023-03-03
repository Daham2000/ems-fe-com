import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";

function AddEmployeeModel(props: any) {
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

export default AddEmployeeModel;