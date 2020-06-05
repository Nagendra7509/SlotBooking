import React from "react";
import { observer, inject } from "mobx-react";
import { observable } from "mobx";
import SideNavBar from "../../common/components/SideNavBar";
import TopNavBar from "../../common/components/TopNavBar";
import ActiveAndInactiveState from "../../common/components/ActiveAndInactiveState";
import { ADMIN_PAGE_WASHINGMACHINE_ACTIVE } from "../../constants/routeConstants/RouteConstants";
import WashingMachineCard from "../../common/components/WashingMachineCard";
import { activeAndInactive } from "../../i18n/strings.json";
import {
    Typo14WhiteHKGroteskSemiBold
}
from "../../../styleGuide/Typos";
import PopUp from "../PopUp";
import {
    WashingMachineActiveContainer,
    SideNavBarAndActiveMachines,
    ActiveMachines,
    ActiveMachineCards,
    AddNewMachine,

}
from "./styledComponents";


@inject('adminStore')
@observer
class WashingMachineActive extends React.Component {

    @observable isClickedAddNewMachine = false;


    componentDidMount() {
        const { getAdminResponse } = this.props.adminStore;
        getAdminResponse();
    }

    onClickUpdate = (event) => {

        const {
            onClickUpdateInWashingMachineCard
        } = this.props.adminStore;
        onClickUpdateInWashingMachineCard(event.target.id);

        const {
            updateMachineId,
            updateMachineStatus
        } = this.props.adminStore;
        //console.log(updateMachineId, updateMachineStatus, "hello-->update slots in active");

        const { history } = this.props;
        history.push(`/slot-booking/admin/washingMachine/details/${updateMachineStatus}/${updateMachineId}`);

    }

    onClickActiveOrInactiveStatus = (event) => {
        const { onClickActiveOrInactiveStatus } = this.props.adminStore;
        onClickActiveOrInactiveStatus(event.target.id);
    }

    onClickAddMachine = () => {
        this.isClickedAddNewMachine = !this.isClickedAddNewMachine;
    }


    render() {
        const { activeWashingMachines, onClickNewWashingMachine } = this.props.adminStore;

        return <WashingMachineActiveContainer>
        
                    <TopNavBar 
                        path={ADMIN_PAGE_WASHINGMACHINE_ACTIVE}
                    />
                    <SideNavBarAndActiveMachines>
                        
                        <SideNavBar 
                            path={ADMIN_PAGE_WASHINGMACHINE_ACTIVE}
                        />
                        
                        <ActiveMachines >
                        
                            <ActiveAndInactiveState 
                                path={ADMIN_PAGE_WASHINGMACHINE_ACTIVE}
                            />
                            
                            <AddNewMachine>
                                <Typo14WhiteHKGroteskSemiBold 
                                    onClick={this.onClickAddMachine}
                                    >+ {activeAndInactive.addNewMachine}
                                </Typo14WhiteHKGroteskSemiBold>
                            </AddNewMachine>
                            
                            <ActiveMachineCards>
                                {activeWashingMachines.length>0 && activeWashingMachines.map(obj=>
                                            <WashingMachineCard 
                                                key={obj.washingMachineId}
                                                washingMachineStatus ={obj.washingMachineStatus}
                                                washingMachineId={obj.washingMachineId}
                                                onClickUpdate={this.onClickUpdate}
                                                onClickActiveOrInactiveStatus={this.onClickActiveOrInactiveStatus}
                                            />
                                            )}
                            </ActiveMachineCards>
                            
                        </ActiveMachines>
                        {this.isClickedAddNewMachine && <PopUp 
                                onClickAddMachine={this.onClickAddMachine}
                                onClickNewWashingMachine={onClickNewWashingMachine}/>}
                </SideNavBarAndActiveMachines>
                
            </WashingMachineActiveContainer>
    }
}


export default WashingMachineActive;
