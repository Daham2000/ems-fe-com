const SubTextComponent = (props : any) => {
    return <p style={{padding: '10px'}} className="topic-font topic-color sub-topic-font">
        {props.text}
    </p>
}

export default SubTextComponent;