const HolidayCard = (props: any) => {
    return <div className="d-flex d-flex-row" style={{
        height: "45px",
        width: "350px",
        marginBottom: "5px",
        borderRadius: "10px",
        backgroundColor: "#F1F3F7"
    }}>
        <div className="holiday-card-left" style={{ backgroundColor: props.color }} />
        <div className="d-flex d-flex-column align-item-start" style={{ marginLeft: "10px", marginTop: "5px" }} >
            <div className="d-flex d-flex-row justify-content-between" style={{width: "300px"}}>
                <p style={{ margin:0 }} className="black-bold-h2">{props.holiday}</p>
                <p style={{ margin:0 }} className="holiday-card-remaining">{props.remaining}</p>
            </div>
            <p style={{ margin:0 }} className="holiday-card-date">{props.date}</p>
        </div>
    </div>;
}

export default HolidayCard;