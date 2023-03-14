import React from "react";
import Aux from '../../hoc/auxxx'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import './BurgerLayout.css';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => (
    <Aux>
    <Toolbar />
    <SideDrawer />
    <main className="Content">{props.children}</main>
    </Aux>
);

export default Layout;