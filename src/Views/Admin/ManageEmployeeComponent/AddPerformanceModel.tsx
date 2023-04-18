import { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import ButtonComponent, { WhiteButtonComponent } from "../../Shared/button-component";
import { IPerformanceReport, PerformanceReport } from "../../../db/Model/PerformanceReport";
import { updatePerformanceReport } from "../../../Business/Performance/updatePerformanceService";
import { Constants } from "../../../Util/constant";
import { monthNames } from "../../../Util/UtilityService";

function AddPerformanceModel(props: any) {

    const [qualityOfWork, setQualityOfWork] = useState(props.isEdit ? props.selectedReport.qualityOfWork : 0);
    const [speedRate, setSpeedRate] = useState(props.isEdit ? props.selectedReport.speedRate : 0);
    const [trustRate, settrustRate] = useState(props.isEdit ? props.selectedReport.trustRate : 0);
    const [givenTargets, setgivenTargets] = useState(props.isEdit ? props.selectedReport.trustRate : 0);
    const [achivedTargets, setachivedTargets] = useState(props.isEdit ? props.selectedReport.achivedTargets : 0);
    const [description, setdescription] = useState(props.isEdit ? props.selectedReport.description : "");
    const [month, setMonth] = useState(props.isEdit ? props.selectedReport.month : "January");

    useEffect(() => {
        if (props.isEdit) {
            setQualityOfWork(props.selectedReport.qualityOfWork);
            setSpeedRate(props.selectedReport.speedRate);
            settrustRate(props.selectedReport.trustRate);
            setgivenTargets(props.selectedReport.givenTargets);
            setachivedTargets(props.selectedReport.achivedTargets);
            setdescription(props.selectedReport.description);
        }
    }, []);

    const updateReport = async () => {
        let report: IPerformanceReport = props.selectedReport;
        report.qualityOfWork = qualityOfWork;
        report.speedRate = speedRate;
        report.trustRate = trustRate;
        report.givenTargets = givenTargets;
        report.achivedTargets = achivedTargets;
        report.description = description;
        props.onSubmit(true, report);
    }

    const addReport = async () => {
        const report: PerformanceReport = {
            empID: props.emp.empID,
            month: month,
            year: new Date().getFullYear(),
            qualityOfWork: 0,
            speedRate: 0,
            trustRate: 0,
            givenTargets: 0,
            achivedTargets: 0,
            description: ""
        };
        report.qualityOfWork = qualityOfWork;
        report.speedRate = speedRate;
        report.trustRate = trustRate;
        report.givenTargets = givenTargets;
        report.achivedTargets = achivedTargets;
        report.description = description;
        props.onSubmit(false, undefined, report);
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
                    {props.isEdit ? "Edit Performance Report" : "Create Performance Report"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <Form.Group className="mb-3">
                        <Form.Label>Select Month</Form.Label>
                        <Form.Select disabled={props.isEdit} defaultValue={props.isEdit ? props.selectedReport.month
                            : ""} onChange={(event) => {
                                setMonth(event.target.value);
                            }} aria-label="Default select example">
                            {
                                monthNames.map((month) => {
                                    return <option id={month}>{month}</option>
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Quality of work</Form.Label>
                        <Form.Control defaultValue={props.isEdit ? props.selectedReport.qualityOfWork : 0} className="w-50" size="sm" min="0"
                            max="10" type="number" onChange={(event) => {
                                setQualityOfWork(Number(event.target.value));
                            }} placeholder="Quality of work out of 10" height={"400px"} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Speed and efficiency</Form.Label>
                        <Form.Control defaultValue={props.isEdit ? props.selectedReport.speedRate : 0} className="w-50" size="sm" min="0"
                            max="10" onChange={(event) => {
                                setSpeedRate(Number(event.target.value));
                            }} type="number" placeholder="Speed and efficiency out of 10" height={"400px"} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Trust and consistency</Form.Label>
                        <Form.Control defaultValue={props.isEdit ? props.selectedReport.trustRate : 0} className="w-50" min="0"
                            max="10" onChange={(event) => {
                                settrustRate(Number(event.target.value));
                            }} maxLength={10} size="sm" type="number" placeholder="Trust and consistency out of 10" height={"400px"} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>A number of targets were given for the months</Form.Label>
                        <Form.Control defaultValue={props.isEdit ? props.selectedReport.givenTargets : 0} className="w-50" min="0"
                            max="50" onChange={(event) => {
                                setgivenTargets(Number(event.target.value));
                            }} size="sm" type="number" placeholder="" height={"400px"} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>A number of targets were achieved for the months</Form.Label>
                        <Form.Control defaultValue={props.isEdit ? props.selectedReport.achivedTargets : 0} className="w-50" min="0"
                            max="50" onChange={(event) => {
                                setachivedTargets(Number(event.target.value));
                            }} size="sm" type="number" placeholder="" height={"400px"} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Overview Feedback</Form.Label>
                        <Form.Control onChange={(event) => {
                            setdescription(event.target.value);
                        }} defaultValue={props.isEdit ? props.selectedReport.description : ""} className="w-80" type="text" placeholder="Type here" height={"400px"} />
                    </Form.Group>

                    {props.isEdit ? <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Overview Rate</Form.Label>
                        <Form.Control disabled defaultValue={props.isEdit ? props.selectedReport.overviewRate.toFixed(2) : ""} className="w-80" type="text" placeholder="Type here" height={"400px"} />
                    </Form.Group> : <></>}

                    <div className="d-flex flex-row justify-content-end">
                        <div style={{ marginLeft: "15px" }} />
                        <ButtonComponent text={props.isEdit ? "Update" : "Create"} onClick={() => {
                            if (props.isEdit) {
                                updateReport();
                            } else {
                                addReport();
                            }
                        }} />
                    </div>

                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default AddPerformanceModel;