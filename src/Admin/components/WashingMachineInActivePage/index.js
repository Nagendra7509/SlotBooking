import React from "react";
import { observer } from "mobx-react";
import SideNavBar from "../../common/components/SideNavBar";
import TopNavBar from "../../common/components/TopNavBar";
import ActiveAndInactiveState from "../../common/components/ActiveAndInactiveState";

@observer
class WashingMachineInactive extends React.Component {


    render() {


        return <div>
                <TopNavBar/>
                <div class="flex">
                    <SideNavBar/>
                    <div className="flex flex-col">
                        <ActiveAndInactiveState/>
                        <h1>Inactive</h1>
                    </div>
                </div>
                </div>
    }
}


export default WashingMachineInactive;
