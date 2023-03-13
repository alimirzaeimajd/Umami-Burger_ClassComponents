import React from "react";
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";
import Aux from "../../hoc/auxxx";

const Modal = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.disableModal} />
        <div className="Modal" style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            {props.children}
        </div>
    </Aux>
);

export default Modal;