import React from "react";
import { ibhubsLogo, profile } from "../../../assets/";
import { topNav } from "../../../i18n/strings.json";
import { ADMIN_PAGE_PROFILE } from "../../../constants/routeConstants/RouteConstants";
import {
    NavBarContainer,
    IbHubsLogo,
    NavItems,
    NavItem,
    Profile
}
from "./styledComponent";
class TopNavBar extends React.Component {


    render() {
        return <NavBarContainer>
                    <IbHubsLogo src={ibhubsLogo.logoAdress} alt={"ibhubsLogo"}/>
                    <NavItems>
                        <Profile href={ADMIN_PAGE_PROFILE}>{topNav.profile}</Profile>
                        <NavItem src={profile.profileAdress}/>
                    </NavItems>
                </NavBarContainer>
    }
}

export default TopNavBar
