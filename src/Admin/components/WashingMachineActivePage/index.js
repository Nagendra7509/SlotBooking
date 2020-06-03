import React from "react";
import { observer, inject } from "mobx-react";
import SideNavBar from "../../common/components/SideNavBar";
import TopNavBar from "../../common/components/TopNavBar";
import ActiveAndInactiveState from "../../common/components/ActiveAndInactiveState";
import { ADMIN_PAGE_WASHINGMACHINE_ACTIVE } from "../../constants/routeConstants/RouteConstants";
import WashingMachineCard from "../../common/components/WashingMachineCard";


@inject('adminStore')
@observer
class WashingMachineActive extends React.Component {


    componentDidMount() {
        const { getAdminResponse } = this.props.adminStore;
        getAdminResponse();
    }

    onClickUpdate = (event) => {
        //alert(event.target.id);
        const { onClickUpdateInWashingMachineCard } = this.props.adminStore;
        onClickUpdateInWashingMachineCard(event.target.id);

    }


    render() {
        const { activeWashingMachines } = this.props.adminStore;

        return <div>
                <TopNavBar path={ADMIN_PAGE_WASHINGMACHINE_ACTIVE}/>
                <div className="flex">
                    <SideNavBar path={ADMIN_PAGE_WASHINGMACHINE_ACTIVE}/>
                    <div className="flex flex-col">
                        <ActiveAndInactiveState path={ADMIN_PAGE_WASHINGMACHINE_ACTIVE}/>
                        <div className="flex flex-wrap">
                        {activeWashingMachines.length>0 && activeWashingMachines.map(obj=>
                                            <WashingMachineCard 
                                                key={obj.washingMachineId}
                                                washingMachineStatus ={obj.washingMachineStatus}
                                                washingMachineId={obj.washingMachineId}
                                                onClickUpdate={this.onClickUpdate}
                                            />
                                            )}
                        </div>
                    </div>
                    
                
                </div>
                </div>
    }
}


export default WashingMachineActive;
