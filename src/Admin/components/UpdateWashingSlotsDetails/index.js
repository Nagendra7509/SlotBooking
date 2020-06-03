import React from "react";
import { observer, inject } from "mobx-react";
import SideNavBar from "../../common/components/SideNavBar";
import TopNavBar from "../../common/components/TopNavBar";
import { activeAndInactive } from "../../i18n/strings.json";
@inject('adminStore')
@observer
class UpdateWashingSlotsDetails extends React.Component {

    render() {

        const { updateSlotsResponse } = this.props.adminStore;
        const { washingMachineID } = activeAndInactive;
        console.log(updateSlotsResponse, "updateSlotsResponse");

        return <div>
                <TopNavBar/>
                <div className="flex ">
                    <SideNavBar/>
                    <div>
                        <h1>Update Details</h1>
                        
                        
                    </div>
                </div>
                </div>
    }
}

export default UpdateWashingSlotsDetails;

// <Header>{}</Header>
//                         <WashingMachineId>{washingMachineID}</WashingMachineId>
