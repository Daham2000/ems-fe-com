import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import ButtonComponent, { WhiteButtonComponent } from "../../Shared/button-component";

function AddPerformanceModel(props: any) {
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
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.isEdit ? "Edit Performance Report" :"Create Performance Report"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Quality of work</Form.Label>
                        <Form.Control className="w-50" size="sm" min="0"
                            max="10" type="number" placeholder="Quality of work out of 10" height={"400px"} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Speed and efficiency</Form.Label>
                        <Form.Control className="w-50" size="sm" min="0"
                            max="10" type="number" placeholder="Speed and efficiency out of 10" height={"400px"} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Trust and consistency</Form.Label>
                        <Form.Control className="w-50" min="0"
                            max="10" maxLength={10} size="sm" type="number" placeholder="Trust and consistency out of 10" height={"400px"} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>A number of targets were given for the months</Form.Label>
                        <Form.Control className="w-50" min="0"
                            max="50" size="sm" type="number" placeholder="" height={"400px"} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>A number of targets were achieved for the months</Form.Label>
                        <Form.Control className="w-50" min="0"
                            max="50" size="sm" type="number" placeholder="" height={"400px"} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Overview Feedback</Form.Label>
                        <Form.Control className="w-80" type="text" placeholder="Type here" height={"400px"} />
                    </Form.Group>

                    <div className="d-flex flex-row justify-content-end">
                        <WhiteButtonComponent text="Cancel" onClick={() => {

                        }} />
                        <div style={{ marginLeft: "15px" }} />
                        <ButtonComponent text="Create" onClick={() => {

                        }} />
                    </div>

                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default AddPerformanceModel;