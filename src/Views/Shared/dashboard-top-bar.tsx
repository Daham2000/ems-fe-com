const DashboardTopBar = (props: any) => {
    const wish = props.wish === 1 ? "Good morning!" : props.wish === 2 ? "Good afternoon!" : "Good evening!";

    return <div>
        <div className="d-flex d-flex-row justify-content-between align-item-between" style={{ width: "84vw" }}>
            <div className="d-flex d-flex-column align-item-start">
                <div className="sub-topic-font">{wish}</div>
                <div className="sub-topic-font" style={{ fontSize: "11px" }}>27 th Jan, Friday</div>
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