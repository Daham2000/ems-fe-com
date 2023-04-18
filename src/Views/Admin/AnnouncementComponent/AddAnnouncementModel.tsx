import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import ButtonComponent, { WhiteButtonComponent } from "../../Shared/button-component";
import { Constants } from "../../../Util/constant";
import { connect } from "react-redux";

const AddAnnouncementModel = (props: any) => {
    const [annoucementTitle, setAnnoucementTitle] = useState("");
    const [annoucementDes, setAnnoucementDes] = useState("");
    const [sendTo, setSendTo] = useState("All Employees");

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
                        <Form.Control className="w-50" size="sm" type="text" height={"400px"} onChange={(event) => {
                            setAnnoucementTitle(event.target.value);
                        }} />
                    </Form.Group>


                    <Form.Group className="mb-3">
                        <Form.Label>{"Select Announcement Viewers"}</Form.Label>
                        <Form.Select onChange={(event) => {
                            setSendTo(event.target.value);
                        }} aria-label="Default select example">
                            <option>All Employees</option>
                            {
                                Constants.UserRoles.map((role) => {
                                    return <option id={role}>{role}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{"Announcement Description"}</Form.Label>
                        <Form.Control onChange={(event) => {
                            setAnnoucementDes(event.target.value);
                        }} as="textarea" type="text" rows={3} cols={2} />
                    </Form.Group>

                    <div className="d-flex flex-row justify-content-end">
                        <WhiteButtonComponent text="Cancel" onClick={() => {

                        }} />
                        <div style={{ marginLeft: "15px" }} />
                        <ButtonComponent text="Create" onClick={() => {
                            props.onSave(annoucementTitle, annoucementDes, sendTo);
                        }} />
                    </div>

                </Form>
            </Modal.Body>
        </Modal>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(AddAnnouncementModel);