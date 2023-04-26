import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ButtonComponent, { WhiteButtonComponent } from "../Shared/button-component";
import SubTextComponent from "../Shared/sub-text";
import WhiteCurvedBox from "../Shared/white-curved-box";
import { connect } from "react-redux";
import { JwtPayloadType } from "../../Util/decodeToken";
import { ActionTypes } from "../../store/actionType";
import { useState } from "react";
import { registerOrgService } from "../../Business/Organization/RegisterOrgService";
import { ToastContainer, toast } from "react-toastify";

const RegisterComponent = (props: any) => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [tag, setTag] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const registerOrg = async () => {
        if (isLoading === false) {
            setIsLoading(true);
            try {
                const res = await registerOrgService(props.idToken, name, tag, email);
                if (res === 201) {
                    toast.success("Organization created succesfully. We have send you an email with the credencials.");
                } else {
                    toast.error("Unable to create the organization, email already used.");
                }
            } catch (e) {
                toast.error("Unable to create the organization, try again later.");
            }
            setIsLoading(false);
        }
    };

    return <div>
        <ToastContainer
            position="top-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
        <div className="bg-color-grey d-flex d-flex-column justify-content-start align-item-center" style={{ height: '100vh', paddingTop: "55px" }}>
            <h5 className="topic-font topic-color font-size-50" style={{ fontSize: '38px', marginBottom: '25px' }}>Welcome to the EMS system</h5>

            <WhiteCurvedBox height="410px">
                <div className="d-flex d-flex-column align-item-start" style={{ padding: "15px" }}>
                    <SubTextComponent text="Register your organization for free" />
                    <Form.Label htmlFor="orgName" style={{ marginTop: "10px" }}>Organization Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="orgName"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        aria-describedby="passwordHelpBlock"
                    />
                    <Form.Label htmlFor="orgTag" style={{ marginTop: "10px" }}>Company Tag</Form.Label>
                    <Form.Control
                        type="text"
                        id="orgTag"
                        onChange={(e) => {
                            setTag(e.target.value);
                        }}
                        aria-describedby="passwordHelpBlock"
                    />
                    <Form.Label htmlFor="orgEmail" style={{ marginTop: "20px" }}>Company Email</Form.Label>
                    <Form.Control
                        type="text"
                        id="orgEmail"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        aria-describedby="passwordHelpBlock"
                    />
                    <div className="d-flex d-flex-row justify-content-end" style={{ width: "100%", paddingTop: "15px" }}>
                        <div style={{ paddingRight: "10px" }}>
                            <WhiteButtonComponent text="Cancel" onClick={() => {

                            }} />
                        </div>
                        <ButtonComponent isLoading={isLoading} text="Create" onClick={() => {
                            registerOrg();
                        }} />
                    </div>
                </div>
            </WhiteCurvedBox>
        </div>
    </div>
}

const mapStateToProps = (state: any) => {
    return {
        idToken: state.idToken,
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);