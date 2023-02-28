const DashboardBtn = (props: any) => {
    return <div className={`${!props.isClicked ? "slider-text-color-gray" : "slider-text-color"} ${props.isClicked ? "bg-color-grey" : ""}`}
        style={{
            marginTop: "10px",
            marginLeft: "5px",
            marginRight: "5px",
            padding: "5px",
            cursor: "pointer"
        }} onClick={() => {props.onClick()}}>{props.title}</div>;
};

export default DashboardBtn;