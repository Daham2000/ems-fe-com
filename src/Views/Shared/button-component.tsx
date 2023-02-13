const ButtonComponent = (props: any) => {
    return <div style={{ padding: '10px' }}>
        <button onClick={props.onClick} className="topic-font button-color color-white button-blue-dark" 
        style={{ width: '120px', height: '25px', fontSize: '12px', paddingRight: '20px', paddingLeft: '20px', padding: '3px', borderRadius: '3px' }}>{props.text}</button>
    </div>
}

export default ButtonComponent;