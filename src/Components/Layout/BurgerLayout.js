import React from "react";
import Aux from '../../hoc/auxxx'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import './BurgerLayout.css';

const Layout = (props) => (
    <Aux>
    <Toolbar />
    <main className="Content">{props.children}</main>
    </Aux>
);

export default Layout;