const SubTextComponent = (props : any) => {
    return <p style={{paddingTop: '18px'}} className="topic-font topic-color sub-topic-font">
        {props.text}
    </p>
}

export default SubTextComponent;