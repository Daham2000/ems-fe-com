import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../Shared/button-component";
import SubTextComponent from "../Shared/sub-text";
import WhiteCurvedBox from "../Shared/white-curved-box";
import { useState } from "react";
import { loginUserService } from "../../Business/Auth/AuthService";
import { connect } from "react-redux";
import { ActionTypes } from "../../store/actionType";
import { JwtPayloadType, decodeToken } from "../../Util/decodeToken";
import { ToastContainer, toast } from "react-toastify";
import { AppConstant } from "../../Util/AppConstants";
import 'react-toastify/dist/ReactToastify.css';

const LoginComponent = (props: any) => {

    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const userLoginEvent = async () => {
        setIsLoading(true);
        const idToken = await loginUserService(userName, password);
        if (idToken !== AppConstant.LoginFailed) {
            const user = decodeToken(idToken);
            props.updateUserDetails(idToken, user);
            if (user !== undefined) {
                navigate("/dashboard-admin");
            }
        } else {
            toast.error("Invalid email or password. Try again.");
        }
        setIsLoading(false);
    }

    return <div>
        <div className="bg-color-grey d-flex d-flex-column justify-content-start align-item-center" style={{ height: '100vh', paddingTop: "55px" }}>
            <h5 className="topic-font topic-color font-size-50" style={{ fontSize: '38px', marginBottom: '25px' }}>Welcome to the EMS system</h5>

            <WhiteCurvedBox height="340px">
                <div className="d-flex d-flex-column align-item-start" style={{ padding: "15px" }}>
                    <SubTextComponent text="Login" />
                    <Form.Label htmlFor="userName" style={{ marginTop: "10px" }}>User Name</Form.Label>
                    <Form.Control
                        type="email"
                        id="userName"
                        value={userName}
                        onChange={(v) => {
                            setUserName(v.target.value);
                        }}
                        aria-describedby="passwordHelpBlock"
                    />
                    <Form.Label htmlFor="fpassword" style={{ marginTop: "20px" }}>Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="fpassword"
                        value={password}
                        onChange={(v) => {
                            setPassword(v.target.value);
                        }}
                        aria-describedby="passwordHelpBlock"
                    />
                    <div className="d-flex d-flex-column align-item-end justify-content-center align-item-center" style={{ width: "100%", paddingTop: "15px" }}>
                        <ButtonComponent text="Login" width={"70px"} isLoading={isLoading} onClick={async () => {
                            userLoginEvent();
                        }} />
                    </div>
                </div>
            </WhiteCurvedBox>
        </div>
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
    </div>
}
const mapStateToProps = (state: any) => {
    return {
        idToken: state.idToken,
        user: state.user,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateUserDetails: (idToken: string, user: JwtPayloadType) => dispatch({
            type: ActionTypes.SAVE_USER_DETAILS,
            payload: { idToken, user }
        })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);