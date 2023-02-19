const WhiteCurvedBox = (props: any) => {
    return <div style={{
        width: "600px",
        marginTop: "20px",
        height: "340px",
        borderRadius: "10px"
    }} className="bg-color-white">
        {props.children}
    </div>;
}

export default WhiteCurvedBox;