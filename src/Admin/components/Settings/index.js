import React from "react";
import { observer } from "mobx-react";
import TopNavBar from "../../common/components/TopNavBar";
import SideNavBar from "../../common/components/SideNavBar";

@observer
class Settings extends React.Component {


    render() {
        return <div>
                <TopNavBar/>
                <div class="flex">
                    <SideNavBar/>
                    <h1>Settings</h1>
                </div>
                </div>

    }
}


export default Settings;
