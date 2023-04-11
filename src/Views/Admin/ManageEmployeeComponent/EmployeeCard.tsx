import { capitalizeFirstLetter } from "../../../Util/UtilityService";
import { Constants } from "../../../Util/constant";
import StarIcon from "../../../assets/starIcon.svg";

const EmployeeCard = (props: any) => {

    const findEmpTitle = (role: string) => {
        switch (role) {
            case Constants.AdminRole:
                return Constants.adminTitle;
            case Constants.QaRole:
                return Constants.qaTitle;
            case Constants.BaRole:
                return Constants.baTitle;
            case Constants.PmRole:
                return Constants.pmTitle;
            case Constants.devRole:
                return Constants.devTitle;
        }
    }

    const findEmpDes = (role: string) => {
        switch (role) {
            case Constants.AdminRole:
                return Constants.adminDescription;
            case Constants.QaRole:
                return Constants.qaDescription;
            case Constants.BaRole:
                return Constants.baDescription;
            case Constants.PmRole:
                return Constants.pmDescription;
            case Constants.devRole:
                return Constants.devDescription;
        }
    }

    const getSkillList = (role: string) => {
        switch (role) {
            case Constants.AdminRole:
                return Constants.QaRoleSkills.map((skill) => {
                    return <div className="skill-card">{skill}</div>
                })
            case Constants.QaRole:
                return Constants.QaRoleSkills.map((skill) => {
                    return <div className="skill-card">{skill}</div>
                })
                return <div className="skill-card">{Constants.QaRoleSkills}</div>
            case Constants.BaRole:
                return Constants.BaRoleSkills.map((skill) => {
                    return <div className="skill-card">{skill}</div>
                })
            case Constants.PmRole:
                return Constants.PmRoleSkills.map((skill) => {
                    return <div className="skill-card">{skill}</div>
                })
            case Constants.devRole:
                return Constants.DevRoleSkills.map((skill) => {
                    return <div className="skill-card">{skill}</div>
                })
        }
    }

    return <div onClick={() => {
        props.onClick()
    }} className="d-flex flex-row bg-color-white align-item-center justify-content-center" style={{
        width: "auto",
        borderRadius: "12px",
        marginTop: "10px",
        height: "80px", paddingTop: "5px", paddingBottom: "5px", paddingLeft: "10px", paddingRight: "10px"
    }}>
        <img height="70px" width="70px"
            className="circle-div"
            src={props.emp.image} />
        <div className="d-flex flex-column align-item-center" style={{ paddingLeft: "20px", paddingRight: "20px" }}>
            <div style={{ fontSize: "15px" }}>{props.emp.name}</div>
            <div style={{ fontSize: "12px", color: "#808080" }}>{findEmpTitle(props.emp.userRole)}</div>
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
            {findEmpDes(props.emp.userRole)}
        </div>
        <div className="d-flex flex-column align-item-start grid-container" style={{ width: "220px", marginLeft: "20px", marginRight: "10px" }}>
            <div style={{ fontSize: "12px", color: "#808080", fontWeight: "600" }}>{"Skills"}</div>
            <div className="grid-container">
                {getSkillList(props.emp.userRole)}
            </div>
        </div>
    </div>;
};

export default EmployeeCard;