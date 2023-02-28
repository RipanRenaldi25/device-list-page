import { Button } from "flowbite-react";
import './btn-no.css';

function ButtonNo(props) {    
    return(
        <Button {...props} className="btn-danger">{props.btnName}</Button>
    )
}

export default ButtonNo;