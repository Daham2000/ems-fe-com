const WrapTextComponent = (props: any) => {
    return <div className="gray-white-box" style={{
        width: "180px",
        height: "20px",
        borderRadius: "50px"
    }}>
        <img src={props.icon} height={"10px"} />
        {props.text}
    </div>;
};

export default WrapTextComponent;