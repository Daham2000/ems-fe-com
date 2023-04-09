import DashboardTopBar from "../Shared/dashboard-top-bar";
import { Form } from "react-bootstrap";
import ButtonComponent from "../Shared/button-component";
import { connect } from "react-redux";
import { JwtPayloadType } from "../../Util/decodeToken";
import { ActionTypes } from "../../store/actionType";

const EmployeeRequestCard = (props: any) => {
    return <div className="d-flex flex-column justify-content-start align-item-start bg-color-white"
        style={{ width: "auto", height: "auto", marginTop: "10px", marginBottom: "5px", padding: "15px", borderRadius: "10px" }}>
        <div className="announcement-title-normal">{props.name}</div>
        <div className="announcement-title-normal" style={{ fontSize: "12px" }}>{"EMP ID: " + props.empID}</div>
        <div className="announcement-title-normal" style={{ fontSize: "12px" }}>{"EMP Job title: " + props.jobTitle}</div>
        <div className="announcement-des-normal">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea repellat, reiciendis
            quo corporis officiis, voluptatem magni perspiciatis debitis est
            dignissimos quos praesentium suscipit velit accusamus dolor
            exercitationem impedit cum atque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, omnis itaque non fuga quas est reprehenderit aliquam autem recusandae
            voluptatibus distinctio porro quasi dignissimos aut. Molestiae optio voluptatem cumque odio.</div>
    </div>
}

const MotivationView = (props: any) => {
    return <div className="d-flex flex-column justify-content-start align-item-start">
        <DashboardTopBar
            isBirthday={false}
            profileUrl="https://nadiazheng.com/wp-content/uploads/2015/12/Montreal-personal-branding-linkedin-profile-professional-headshot-by-nadia-zheng-800x1000.jpg"
            wish={1} />
        <div className="sub-topic-font " style={{ marginTop: "15px" }}>{"Motivation Page"}</div>

        <div className="sub-topic-font" style={{ marginTop: "15px", fontSize: "12px" }}>{"Employee requests"}</div>
        <div className="d-flex flex-column justify-content-start align-item-start">
            <EmployeeRequestCard name="John Cick" empID="E0001" jobTitle="Software developer" />
            <EmployeeRequestCard name="John Cick" empID="E0001" jobTitle="Software developer" />
            <EmployeeRequestCard name="John Cick" empID="E0001" jobTitle="Software developer" />
        </div>

        {!props.user.admin ? <div className="d-flex flex-row bg-color-white justify-content-between"
            style={{ borderRadius: "10px", width: "auto", marginTop: "10px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", paddingBottom: "10px", marginBottom: "15px" }}>
            <div className="d-flex flex-row">
                <div className="d-flex flex-column justify-content-start align-item-start" style={{ marginRight: "20px" }}>
                    <div className="sub-topic-font" style={{ marginTop: "5px", marginBottom: "1px", fontSize: "20px" }}>{"Don’t Stress"}</div>
                    <div className="announcement-des-normal" style={{ marginTop: "1px", paddingTop: "0" }}>
                        {
                            "Text your problem to us."
                        }
                    </div>
                    <div className="announcement-des-normal" style={{ width: "420px" }}>

                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                        similique molestias minus reprehenderit. Repellat deleniti ex
                        dignissimos non possimus. Culpa, blanditiis magnam! Tempore,
                        excepturi commodi delectus impedit officiis nostrum ab. Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Ea praesentium sapiente digniss
                        imos atque eius molestiae nam corrupti voluptatibus quae itaque ab mod
                        i quaerat nesciunt asperiores tenetur reiciendis, distinctio ducimus
                        laborum.

                    </div>

                    <Form.Group className="mt-3 mb-1" controlId="formBasicEmail">
                        <Form.Label style={{ fontSize: "10px" }}>{"Type your problem here..... Let’s Find a solution together"}</Form.Label>
                        <Form.Control as="textarea" rows={3} cols={4} />
                    </Form.Group>
                    <ButtonComponent text="Send" width={"60px"} onClick={() => {
                    }} />
                </div>
                <img height="340px" width="470px"
                    src={"https://post.healthline.com/wp-content/uploads/2020/08/stressed_man_writing-732x549-thumbnail.jpg"} />
            </div>
        </div> : <></>}

        {!props.user.admin ? <div className="grid-layout">
            <div className="d-flex flex-column bg-color-white justify-content-start align-item-start"
                style={{ borderRadius: "10px", width: "auto", marginTop: "10px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", paddingBottom: "10px", marginBottom: "15px" }}>
                <div className="sub-topic-font" style={{ marginTop: "5px", marginBottom: "1px", fontSize: "13px" }}>{"Our Mentor Team"}</div>
                <div className="announcement-des-normal" style={{ marginTop: "1px", paddingTop: "0" }}>
                    {
                        "You can text with your mentor privatly"
                    }
                </div>
                <div style={{ marginTop: "20px" }} className="grid-four">
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                    <PictureCard />
                </div>
            </div>

            <div className="d-flex flex-column bg-color-white justify-content-start align-item-start"
                style={{ borderRadius: "10px", width: "auto", marginTop: "10px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px", paddingBottom: "10px", marginBottom: "15px" }}>
                <div className="sub-topic-font" style={{ marginTop: "5px", marginBottom: "1px", fontSize: "13px" }}>{"Support for self-motivation"}</div>
                <div className="announcement-des-normal" style={{ marginTop: "1px", paddingTop: "0", width: "400px" }}>
                    {
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
                    }
                </div>
                <div style={{ height: "20px" }} />
                <MotivationSelfCard />
                <MotivationSelfCard />
            </div>
        </div> : <></>}

    </div>;
};

const PictureCard = () => {
    return <div>
        <img height="70px" width="70px"
            className="circle-div"
            src={"https://nadiazheng.com/wp-content/uploads/2015/12/Montreal-personal-branding-linkedin-profile-professional-headshot-by-nadia-zheng-800x1000.jpg"} />
        <div style={{ fontSize: "12px" }}>{"Jenny Claraa"}</div>
    </div>;
}

const MotivationSelfCard = () => {
    return <div className="d-flex flex-row" style={{ marginBottom: "10px" }}>
        <img height="70px" width="100px" style={{ borderRadius: "10px" }}
            src={"https://snacknation.com/wp-content/uploads/2021/06/shutterstock_1386599774-scaled-e1624375499882.jpg"} />
        <div className="d-flex flex-column justify-content-start align-item-start" style={{ marginLeft: "10px" }}>
            <div className="sub-topic-font" style={{ marginTop: "5px", marginBottom: "1px", fontSize: "13px" }}>{"Work-Life Balancing"}</div>
            <div className="announcement-des-normal" style={{ marginTop: "1px", paddingTop: "0", width: "400px" }}>
                {
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has "
                }
            </div>
        </div>
    </div>;
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

export default connect(mapStateToProps, mapDispatchToProps)(MotivationView);