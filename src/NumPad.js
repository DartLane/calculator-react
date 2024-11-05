export default function NumPad(props) {
    return (
        <div className="numPad">
            <div className="row">
                <button onClick={props.onClick}>1</button>
                <button onClick={props.onClick}>2</button>
                <button onClick={props.onClick}>3</button>
            </div>
            <div className="row">
                <button onClick={props.onClick}>4</button>
                <button onClick={props.onClick}>5</button>
                <button onClick={props.onClick}>6</button>
            </div>
            <div className="row">
                <button onClick={props.onClick}>7</button>
                <button onClick={props.onClick}>8</button>
                <button onClick={props.onClick}>9</button>
            </div>
            <div className="row">
                <button onClick={props.onClick}>0</button>
            </div>
        </div>
    )
}