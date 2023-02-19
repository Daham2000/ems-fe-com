import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ButtonComponent, { WhiteButtonComponent } from "../Shared/button-component";
import SubTextComponent from "../Shared/sub-text";
import WhiteCurvedBox from "../Shared/white-curved-box";

const RegisterComponent = () => {

    const navigate = useNavigate();

    return <div>
        <div className="bg-color-grey d-flex d-flex-column justify-content-start align-item-center" style={{ height: '100vh', paddingTop: "55px" }}>
            <h5 className="topic-font topic-color font-size-50" style={{ fontSize: '38px', marginBottom: '25px' }}>Welcome to the EMS system</h5>

            <WhiteCurvedBox height="410px">
                <div className="d-flex d-flex-column align-item-start" style={{ padding: "15px" }}>
                    <SubTextComponent text="Register your organization for free" />
                    <Form.Label htmlFor="orgName" style={{ marginTop: "10px" }}>Organization Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="orgName"
                        aria-describedby="passwordHelpBlock"
                    />
                    <Form.Label htmlFor="orgTag" style={{ marginTop: "10px" }}>Company Tag</Form.Label>
                    <Form.Control
                        type="text"
                        id="orgTag"
                        aria-describedby="passwordHelpBlock"
                    />
                    <Form.Label htmlFor="orgEmail" style={{ marginTop: "20px" }}>Company Email</Form.Label>
                    <Form.Control
                        type="text"
                        id="orgEmail"
                        aria-describedby="passwordHelpBlock"
                    />
                    <div className="d-flex d-flex-row justify-content-end" style={{ width: "100%", paddingTop: "15px" }}>
                        <div style={{ paddingRight: "10px" }}>
                            <WhiteButtonComponent text="Cancel" onClick={() => {

                            }} />
                        </div>
                        <ButtonComponent text="Create" onClick={() => {

                        }} />
                    </div>
                </div>
            </WhiteCurvedBox>
        </div>
    </div>
}

export default RegisterComponent;