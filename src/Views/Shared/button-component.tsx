import { Spinner } from "react-bootstrap";

const ButtonComponent = (props: any) => {
    return <div>
        <button onClick={props.onClick} className="topic-font button-color color-white button-blue-dark"
            style={{ width: props.width ? props.width : 'auto', height: '25px', fontSize: '12px', paddingRight: '30px', paddingLeft: '28px', padding: '3px', borderRadius: '3px' }}>
            {props.isLoading ? <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            /> : " " + props.text + " "}  
        </button>
    </div>
};

export default ButtonComponent;

export const WhiteButtonComponent = (props: any) => {
    return <div>
        <button onClick={props.onClick} className="topic-font button-blue-dark"
            style={{ width: 'auto', height: '25px', fontSize: '12px', paddingRight: '25px', paddingLeft: '26px', padding: '3px', borderRadius: '3px' }}>{props.text}</button>
    </div>
};