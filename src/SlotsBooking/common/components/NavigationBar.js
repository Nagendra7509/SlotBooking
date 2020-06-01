import React from "react";
import Strings from "../../i18n/strings.json";
import { observer } from "mobx-react";
import {
    SLOTS_BOOKING_PATH,
    REQUEST_PAGE_PATH,
    REPORTANISSUE_PAGE_PATH,
    PREVIOUS_SLOTS_PAGE_PATH,
    PROFILE_PAGE
}
from "../../constants/routeConstants/RouteConstants";
import { ibhubsLogo, profile } from "../../assets/";
import { NavBarItem } from ".";
import { NavBar, Logo, IbHubsLogo, NavItems, TopPart, BottomPart, ProfileImg } from "./NavigationBarStyles.js";

@observer
class NavigationBar extends React.Component {


    render() {

        return (<NavBar>
                
                    <TopPart>
                    
                        <Logo>
                            <IbHubsLogo src={ibhubsLogo.logoAdress}/>
                        </Logo>
                        
                        <NavItems>
                        
                            <NavBarItem 
                                href={SLOTS_BOOKING_PATH}
                                >{Strings.navigationBar.home}
                            </NavBarItem>
                            
                            <NavBarItem 
                                href={REQUEST_PAGE_PATH}
                                >{Strings.navigationBar.requests}
                            </NavBarItem>
                            
                            <NavBarItem 
                                href={REPORTANISSUE_PAGE_PATH}
                                >{Strings.navigationBar.reportAnIssue}
                            </NavBarItem>
                            
                            <NavBarItem 
                                href={PREVIOUS_SLOTS_PAGE_PATH} 
                                >{Strings.navigationBar.previousSlots}
                            </NavBarItem>
                            
                            <NavBarItem 
                                href={PROFILE_PAGE} 
                                >{Strings.navigationBar.profile}
                            </NavBarItem>
                            
                            <ProfileImg src={profile.profileAdress}/>
                            
                        </NavItems>
                        
                    </TopPart>
                    
                    <BottomPart>
                        <NavBarItem>{Strings.navigationBar.numberOfSlotsMissed}:{0}</NavBarItem>
                    </BottomPart>
                    
                </NavBar>)

    }
}


export default NavigationBar;
