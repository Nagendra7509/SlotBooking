import React from "react";
import { observer } from "mobx-react";
import SlotBookingDashBoard from "../../../SlotsDashBoard/components/DashBoard";
import { ibhubsLogo, profile } from "../../assets/";
import { NavBarItem } from "../../common/components";
import Strings from "../../i18n/strings.json";
import Requests from "./RequestsPage";
import ReportAnIssue from "./ReportAnIssuePage";
import PreviousSlots from "./PreviousSlotsPage";
import Profile from "./Profile";
import {
    SlotsBookingHomePageContainer,
    NavBar,
    Logo,
    IbHubsLogo,
    NavItems,
    ProfileImg,
    TopPart,
    BottomPart,

}
from "./styledComponent";


@observer
class SlotsBookingHomePage extends React.Component {

    render() {

        const {
            currentPage,
            onClickHome,
            onClickRequests,
            onClickReportAnIssue,
            onClickPreviousSlots,
            onClickProfile,
            previousSlots
        } = this.props;



        return <SlotsBookingHomePageContainer>
        
                <NavBar>
                
                    <TopPart>
                    
                        <Logo>
                            <IbHubsLogo src={ibhubsLogo.logoAdress}/>
                        </Logo>
                        
                        <NavItems>
                        
                            <NavBarItem 
                                onClickPage={onClickHome} 
                                colorValue={currentPage=="Home"}
                                >{Strings.navigationBar.home}
                            </NavBarItem>
                            
                            <NavBarItem 
                                onClickPage={onClickRequests} 
                                colorValue={currentPage=="Requests"}
                                >{Strings.navigationBar.requests}
                            </NavBarItem>
                            
                            <NavBarItem 
                                onClickPage={onClickReportAnIssue}
                                colorValue={currentPage=="ReportAnIssue"}
                                >{Strings.navigationBar.reportAnIssue}
                            </NavBarItem>
                            
                            <NavBarItem 
                                onClickPage={onClickPreviousSlots} 
                                colorValue={currentPage=="PreviousSlots"}
                                >{Strings.navigationBar.previousSlots}
                            </NavBarItem>
                            
                            <NavBarItem 
                                onClickPage={onClickProfile} 
                                colorValue={currentPage=="Profile"}
                                >{Strings.navigationBar.profile}
                            </NavBarItem>
                            
                            <ProfileImg src={profile.profileAdress}/>
                            
                        </NavItems>
                        
                    </TopPart>
                    
                    <BottomPart>
                        <NavBarItem>{Strings.navigationBar.numberOfSlotsMissed}:{0}</NavBarItem>
                    </BottomPart>
                    
                </NavBar>
                
                {currentPage=="Home" && <SlotBookingDashBoard/>}
                {currentPage=="Requests" && <Requests/>}
                {currentPage=="ReportAnIssue" && <ReportAnIssue/>}
                {currentPage=="PreviousSlots" && <PreviousSlots previousSlots={previousSlots}/>}
                {currentPage=="Profile" && <Profile/>}
            
        </SlotsBookingHomePageContainer>;

    }

}


export default SlotsBookingHomePage;
