import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import ButtonComponent, { WhiteButtonComponent } from "../../Shared/button-component";
import { Constants } from "../../../Util/constant";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import { IHoliday } from "../../../db/Model/Holiday";
import { ToastContainer, toast } from "react-toastify";
import { addHolidayService } from "../../../Business/Holiday/GetHolidayService";

const AddHolidayModel = (props: any) => {
    const [holidayTitle, setHolidayTitle] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [date, setDate] = useState(new Date());
    const today = new Date();

    const addHoliday = async () => {
        try {
            const holiday: IHoliday = {
                holidayTitle: holidayTitle,
                eventDate: date
            }
            const res = await addHolidayService(props.idToken, holiday);
            if (res === 201) {
                toast.success("Holiday added...");
                props.onClose()
            } else {
                toast.error("Holiday can't update...");
            }
        } catch (e) {
            toast.error("Holiday can't update...");
        }
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {"Add a Holiday"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{"Holiday Title"}</Form.Label>
                        <Form.Control className="w-50" size="sm" type="text" height={"400px"} onChange={(event) => {
                            setHolidayTitle(event.target.value);
                        }} />
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex flex-column align-item-start" controlId="validationFormik03">
                        <Form.Label>Holiday Date</Form.Label>

                        <DatePicker
                            selected={date}
                            onChange={(e) => {
                                setDate(e ?? new Date());
                            }}
                            value={date.toDateString()}
                            className="form-control"
                            minDate={today}
                            customInput={
                                <input
                                    type="text"
                                    id="date"
                                    placeholder="Enter holiday date"
                                />
                            }
                        />
                    </Form.Group>


                    <div className="d-flex flex-row justify-content-end">
                        <WhiteButtonComponent text="Cancel" onClick={() => {
                            props.onClose()
                        }} />
                        <div style={{ marginLeft: "15px" }} />
                        <ButtonComponent text="Add" onClick={() => {
                            addHoliday()
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

export default connect(mapStateToProps, mapDispatchToProps)(AddHolidayModel);