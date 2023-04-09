import { getDashboardDateTime, getDashboardTimeWish } from "../../Util/UtilityService";

const DashboardTopBar = (props: any) => {

    const wish = getDashboardTimeWish();

    return <div>
        <div className="d-flex d-flex-row justify-content-between align-item-between" style={{ width: "84vw" }}>
            <div className="d-flex d-flex-column align-item-start">
                <div className="sub-topic-font">{wish}</div>
                <div className="sub-topic-font" style={{ fontSize: "11px" }}>{getDashboardDateTime()}</div>
                <div className="topic-font" style={{ fontStyle: "italic", fontSize: "10px", paddingTop: "6px" }}>All growth depends upon activity.</div>
            </div>
            <img height="35px" width="35px"
                className="circle-div"
                src={props.profileUrl} />
        </div>

        {!props.isBirthday ? <div></div> : <div className="d-flex d-flex-column align-item-end" style={{ width: "84vw" }}>
            <div className="d-flex d-flex-row birthday-wish-msg" style={{ width: "250px" }}>
                <div>{"Happy Birthday Jenny-See your wish"}</div>
            </div>
        </div>}
    </div>;
};

export default DashboardTopBar;