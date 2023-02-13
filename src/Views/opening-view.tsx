import { useNavigate } from "react-router-dom";
import ButtonComponent from "./Shared/button-component";
import SubTextComponent from "./Shared/sub-text";

const OpeningView = () => {

    const navigate = useNavigate();

    return <div className="bg-color-white d-flex d-flex-column justify-content-center align-item-center" style={{ height: '84vh' }}>
        <h5 className="topic-font topic-color font-size-50" style={{ fontSize: '38px', marginBottom: '25px' }}>Welcome to the EMS system</h5>
        <div className="d-flex d-flex-column justify-content-end align-item-end">
            <div className="d-flex d-flex-row justify-content-center align-item-center">
                <SubTextComponent text="Already have an account?" />
                <ButtonComponent text="Login" onClick={() => {
                    navigate("/login");
                }} />
            </div>
            <div className="d-flex d-flex-row justify-content-center align-item-center">
                <SubTextComponent text="Or you can create an organization for free" />
                <ButtonComponent text="Register" />
            </div>
        </div>
    </div>;
};

export default OpeningView;