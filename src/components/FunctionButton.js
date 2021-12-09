const FunctionButton = (props) => {
    return(
        <button  onClick={props.onClick} className="button" >{props.buttonTitle}</button>
    )
}

export default FunctionButton