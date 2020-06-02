import React from "react";

import { observer } from "mobx-react";
import { observable } from "mobx";
import { SideNavItem } from "../";
import { sideNav } from "../../../i18n/strings.json";
import {
    ADMIN_PAGE_PATH_ISSUES,
    ADMIN_PAGE_SETTINGS,
    ADMIN_PAGE_WASHINGMACHINE_ACTIVE
}
from "../../../constants/routeConstants/RouteConstants";
import { SideNavBarContainer } from "./styledComponent";

@observer
class SideNavBar extends React.Component {

    @observable clickedItem;

    handleOnClick = (event) => {
        //alert(event.target.id);
        this.clickedItem = event.target.id;
    }

    render() {
        const { issues, washingMachine, settings } = sideNav;

        return <SideNavBarContainer>
                    <SideNavItem
                        id={issues}
                        isClicked={this.clickedItem==issues}
                        onClick={this.handleOnClick}
                        href={ADMIN_PAGE_PATH_ISSUES}
                        >{issues}
                    </SideNavItem>
                    <SideNavItem
                        id={washingMachine}
                        isClicked={this.clickedItem==washingMachine}
                        onClick={this.handleOnClick}    
                        href={ADMIN_PAGE_WASHINGMACHINE_ACTIVE}
                        >{washingMachine}
                    </SideNavItem>
                    <SideNavItem
                        id={settings}
                        isClicked={this.clickedItem==settings}
                        onClick={this.handleOnClick}
                        href={ADMIN_PAGE_SETTINGS}
                        >{settings}
                    </SideNavItem>
                </SideNavBarContainer>

    }

}


export default SideNavBar;
