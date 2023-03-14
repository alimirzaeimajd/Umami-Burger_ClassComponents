import NavigationItems from "../NavigationItems/NavigationItems";
import React from "react";
import Logo from "../../Logo/Logo";
import '../Navigation.css';
import Backdrop from "../../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/auxxx";

const SideDrawer = (props) => {
    let classNames = 'SideDrawer Close';

    if (props.open) {
        classNames = 'SideDrawer Open';
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={classNames}>
                <Logo height="11%" />
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}



export default SideDrawer;