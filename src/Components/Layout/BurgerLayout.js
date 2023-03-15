import React, { Component } from "react";
import Aux from '../../hoc/auxxx'
import Toolbar from "../Navigation/Toolbar/Toolbar";
import './BurgerLayout.css';
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    showMenuHandler = () => {
        this.setState(prevState => ({ showSideDrawer: !prevState.showSideDrawer })) 
    }


    render() {
        return (
            <Aux>
                <Toolbar clickedMenu={this.showMenuHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler} />
                <main className="Content">{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;