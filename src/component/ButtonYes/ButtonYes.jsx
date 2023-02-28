import { Button } from "flowbite-react";
import "./btn-yes.css";

function ButtonYes(props) {    
    return(
        <Button {...props} className="btn-primary">{props.btnName}</Button>
    )
}

export default ButtonYes;