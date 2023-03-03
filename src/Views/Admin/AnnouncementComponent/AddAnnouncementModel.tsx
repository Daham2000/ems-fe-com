import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import ButtonComponent, { WhiteButtonComponent } from "../../Shared/button-component";

const AddAnnouncementModel = (props: any) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {"Create Announcement"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{"Announcement Title"}</Form.Label>
                        <Form.Control className="w-50" size="sm" type="text" placeholder="" height={"400px"} />
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Label>{"Select Announcement Viewers"}</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>All Employees</option>
                            <option value="1">Dev Team</option>
                            <option value="2">QA Team</option>
                            <option value="3">HR Unit</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{"Announcement Description"}</Form.Label>
                        <Form.Control as="textarea" rows={3} />
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
};

export default AddAnnouncementModel;