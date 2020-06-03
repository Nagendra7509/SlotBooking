import React from "react";
import { observer } from "mobx-react";
import TopNavBar from "../../common/components/TopNavBar";
import SideNavBar from "../../common/components/SideNavBar";
import { ADMIN_PAGE_SETTINGS } from "../../constants/routeConstants/RouteConstants";

@observer
class Settings extends React.Component {


    render() {
        return <div>
                <TopNavBar path={ADMIN_PAGE_SETTINGS}/>
                <div class="flex">
                    <SideNavBar path={ADMIN_PAGE_SETTINGS}/>
                    <h1>Settings</h1>
                </div>
                </div>

    }
}


export default Settings;
