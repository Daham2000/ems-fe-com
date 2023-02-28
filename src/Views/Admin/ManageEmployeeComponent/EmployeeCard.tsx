import StarIcon from "../../../assets/starIcon.svg";

const EmployeeCard = () => {
    return     <div className="d-flex flex-row bg-color-white align-item-center justify-content-center" style={{
        width: "auto",
        borderRadius: "12px",
        marginTop: "10px",
        height: "80px", paddingTop: "5px", paddingBottom: "5px", paddingLeft: "10px", paddingRight: "10px"
    }}>
        <img height="70px" width="70px"
            className="circle-div"
            src={"https://nadiazheng.com/wp-content/uploads/2015/12/Montreal-personal-branding-linkedin-profile-professional-headshot-by-nadia-zheng-800x1000.jpg"} />
        <div className="d-flex flex-column align-item-center" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <div style={{ fontSize: "15px" }}>{"Jenny Claraa"}</div>
            <div style={{ fontSize: "12px", color: "#808080" }}>{"Product Manager"}</div>
            <div className="d-flex flex-row justify-content-center" style={{
                borderRadius: "10px",
                marginTop: "5px",
                backgroundColor: "#E0BDF1",
                width: "110px", height: "15px"
            }}>
                <img src={StarIcon} style={{ width: "10px", marginRight: "5px" }} />
                <div style={{ color: "#B650E6", fontSize: "10px", fontWeight: "bold" }}>Level 2 employee</div>
            </div>
        </div>
        <div style={{ marginLeft: "10px", width: "250px", marginRight: "10px", fontSize: "14px", color: "#808080" }}>
            “I am always capable of identifying the needs of our customers regarding a product”
        </div>
        <div className="d-flex flex-column align-item-start" style={{ width: "150px", marginLeft: "20px", marginRight: "10px" }}>
            <div style={{ fontSize: "12px", color: "#808080", fontWeight: "600" }}>{"Skills"}</div>
            <div className="d-flex flex-row" style={{width: "200px"}}>
                <div className="skill-card">Management</div>
                <div className="skill-card">Management</div>
            </div>
            <div className="d-flex flex-row" style={{width: "200px"}}>
                <div className="skill-card">Management</div>
                <div className="skill-card">Management</div>
            </div>
        </div>
    </div>;
};

export default EmployeeCard;