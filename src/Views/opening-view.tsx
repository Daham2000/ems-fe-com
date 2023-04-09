import { useNavigate } from "react-router-dom";
import ButtonComponent from "./Shared/button-component";
import SubTextComponent from "./Shared/sub-text";
import { JwtPayloadType } from "../Util/decodeToken";
import { connect } from "react-redux";
import { ActionTypes } from "../store/actionType";

const OpeningView = (props: any) => {

    const navigate = useNavigate();

    return <div className="bg-color-white d-flex d-flex-column justify-content-center align-item-center" style={{ height: '84vh' }}>
        {<>
            <h5 className="topic-font topic-color font-size-50" style={{ fontSize: '38px', marginBottom: '25px' }}>Welcome to the EMS system</h5>
            <div className="d-flex d-flex-column justify-content-end align-item-end">
                <div className="d-flex d-flex-row justify-content-center align-item-center">
                    <SubTextComponent text="Already have an account?" />
                    <div style={{ padding: "10px" }}>
                        <ButtonComponent text="Login" onClick={() => {
                            navigate("/login");
                        }} />
                    </div>
                </div>
                <div className="d-flex d-flex-row justify-content-center align-item-center">
                    <SubTextComponent text="Or you can create an organization for free" />
                    <div style={{ padding: "10px" }}>
                        <ButtonComponent text="Register" onClick={() => {
                            navigate("/signup");
                        }} />
                    </div>
                </div>
            </div>
        </>}
    </div>;
};

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

export default connect(mapStateToProps, mapDispatchToProps)(OpeningView);