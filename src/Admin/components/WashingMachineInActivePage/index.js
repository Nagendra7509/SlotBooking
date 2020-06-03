import React from "react";
import { observer, inject } from "mobx-react";
import SideNavBar from "../../common/components/SideNavBar";
import TopNavBar from "../../common/components/TopNavBar";
import ActiveAndInactiveState from "../../common/components/ActiveAndInactiveState";
import { ADMIN_PAGE_WASHINGMACHINE_INACTIVE } from "../../constants/routeConstants/RouteConstants";
import WashingMachineCard from "../../common/components/WashingMachineCard";
import { Typo14WhiteHKGroteskSemiBold } from "../../../styleGuide/Typos";
import { activeAndInactive } from "../../i18n/strings.json";
import {
    WashingMachineInActiveContainer,
    SideNavBarAndInActiveMachines,
    InActiveMachines,
    InActiveMachineCards,
    AddNewMachine
}
from "./styledComponents";

@inject('adminStore')
@observer
class WashingMachineInactive extends React.Component {

    componentDidMount() {
        this.props.adminStore.getAdminResponse();
    }

    onClickUpdate = (event) => {
        const { onClickUpdateInWashingMachineCard } = this.props.adminStore;
        onClickUpdateInWashingMachineCard(event.target.id);

        const {
            updateMachineId,
            updateMachineStatus
        } = this.props.adminStore;

        const { history } = this.props;
        history.push(`/slot-booking/admin/washingMachine/details/${updateMachineStatus}/${updateMachineId}`);
    }

    onClickActiveOrInactiveStatus = (event) => {

        const { onClickActiveOrInactiveStatus } = this.props.adminStore;
        onClickActiveOrInactiveStatus(event.target.id);


    }


    render() {

        const { inActiveWashingMachines, onClickNewWashingMachine } = this.props.adminStore

        return <WashingMachineInActiveContainer>
        
                    <TopNavBar 
                        path={ADMIN_PAGE_WASHINGMACHINE_INACTIVE}
                    />
                    <SideNavBarAndInActiveMachines>
                    
                        <SideNavBar 
                            path={ADMIN_PAGE_WASHINGMACHINE_INACTIVE}
                        />
                        <InActiveMachines>
                        
                            <ActiveAndInactiveState 
                                path={ADMIN_PAGE_WASHINGMACHINE_INACTIVE}
                            />
                            <AddNewMachine>
                                <Typo14WhiteHKGroteskSemiBold 
                                    onClick={onClickNewWashingMachine}
                                    >+ {activeAndInactive.addNewMachine}
                                </Typo14WhiteHKGroteskSemiBold>
                            </AddNewMachine>
                            <InActiveMachineCards>
                                {inActiveWashingMachines.length>0 && inActiveWashingMachines.map(obj=>
                                            <WashingMachineCard
                                                key={obj.washingMachineId}
                                                washingMachineStatus ={obj.washingMachineStatus}
                                                washingMachineId={obj.washingMachineId}
                                                onClickUpdate={this.onClickUpdate}
                                                onClickActiveOrInactiveStatus={this.onClickActiveOrInactiveStatus}
                                            />
                                )}
                            </InActiveMachineCards>
                        </InActiveMachines>
                    </SideNavBarAndInActiveMachines>
                </WashingMachineInActiveContainer>
    }
}


export default WashingMachineInactive;
