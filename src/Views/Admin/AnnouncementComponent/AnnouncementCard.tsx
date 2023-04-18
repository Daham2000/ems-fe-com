import { capitalizeFirstLetter } from "../../../Util/UtilityService";

const AnnoucementCard = (props: any) => {
    return <div className="d-flex flex-column justify-content-start align-item-start bg-color-white"
        style={{ width: "auto", height: "auto", marginTop: "10px", marginBottom: "5px", padding: "15px", borderRadius: "10px" }}>
        <div className="announcement-title-normal">{capitalizeFirstLetter(props.annuncements.announcementTitle)}</div>
        <div className="announcement-des-normal">{capitalizeFirstLetter(props.annuncements.message)}</div>
    </div>
}

export default AnnoucementCard;