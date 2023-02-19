import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../Shared/button-component";
import SubTextComponent from "../Shared/sub-text";
import WhiteCurvedBox from "../Shared/white-curved-box";

const LoginComponent = () => {

    const navigate = useNavigate();

    return <div>
        <div className="bg-color-grey d-flex d-flex-column justify-content-start align-item-center" style={{ height: '100vh', paddingTop: "55px" }}>
            <h5 className="topic-font topic-color font-size-50" style={{ fontSize: '38px', marginBottom: '25px' }}>Welcome to the EMS system</h5>

            <WhiteCurvedBox height="340px">
                <div className="d-flex d-flex-column align-item-start" style={{ padding: "15px" }}>
                    <SubTextComponent text="Login" />
                    <Form.Label htmlFor="userName" style={{ marginTop: "10px" }}>User Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="userName"
                        aria-describedby="passwordHelpBlock"
                    />
                    <Form.Label htmlFor="fpassword" style={{ marginTop: "20px" }}>Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="fpassword"
                        aria-describedby="passwordHelpBlock"
                    />
                    <div className="d-flex d-flex-column align-item-end" style={{ width: "100%", paddingTop: "15px" }}>
                        <ButtonComponent text="Login" onClick={() => {
                            navigate("/dashboard-admin");
                        }} />
                    </div>
                </div>
            </WhiteCurvedBox>
        </div>
    </div>
}

export default LoginComponent;