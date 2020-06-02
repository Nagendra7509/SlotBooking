import React from "react";
import { observer } from "mobx-react";
import SideNavBar from "../../common/components/SideNavBar";
import TopNavBar from "../../common/components/TopNavBar";
import ActiveAndInactiveState from "../../common/components/ActiveAndInactiveState";
@observer
class WashingMachineActive extends React.Component {


    render() {


        return <div>
                <TopNavBar/>
                <div class="flex">
                    <SideNavBar/>
                    <div class="flex flex-col">
                        <ActiveAndInactiveState/>
                        <h1>Active</h1>
                    </div>
                    
                
                </div>
                </div>
    }
}


export default WashingMachineActive;
