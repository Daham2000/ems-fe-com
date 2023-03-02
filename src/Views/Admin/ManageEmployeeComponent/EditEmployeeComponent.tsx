import { Form } from "react-bootstrap";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditEmployeeComponent = (props: any) => {
    const today = new Date();
    const [joinedDate, setJoinedDate] = useState(new Date());
    const [birthDay, setBirthDay] = useState(new Date());

    return <div>
        <Form className="grid-layout">
            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicEmail">
                <Form.Label>Full name</Form.Label>
                <Form.Control type="text" placeholder="Enter Full name" />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicUserName">
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" placeholder="Enter User name" />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicNic">
                <Form.Label>NIC</Form.Label>
                <Form.Control type="text" placeholder="Enter NIC number" />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicJobTitle">
                <Form.Label>Job title</Form.Label>
                <Form.Control type="text" placeholder="Enter Job Title" />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicContactNum">
                <Form.Label>Contact number</Form.Label>
                <Form.Control type="number" placeholder="Enter Contact number" />
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

            <Form.Group className="mb-3 d-flex flex-column align-item-start">
                <Form.Label>Select User Role</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>User Role</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Save
            </Button>
        </Form>
    </div>;
};

export default EditEmployeeComponent;