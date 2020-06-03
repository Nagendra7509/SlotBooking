import React from "react";

import { observer } from "mobx-react";
import { clearUserSession } from "../../../Authentication/utils/StorageUtils";
import { LOGIN_PATH } from "../../../Authentication/constants/routeConstants/RouteConstants";
import TopNavBar from "../../common/components/TopNavBar";
import SideNavBar from "../../common/components/SideNavBar";
import { ADMIN_PAGE_PROFILE } from "../../constants/routeConstants/RouteConstants";
@observer
class ProfilePage extends React.Component {

    onClickLogout = () => {
        clearUserSession();
        const { history } = this.props;
        history.push(LOGIN_PATH);

    }

    render() {
        return <div>
                <TopNavBar path={ADMIN_PAGE_PROFILE}/>
                <div className="flex ">
                    <SideNavBar path={ADMIN_PAGE_PROFILE}/>
                    <div>
                        <button onClick={this.onClickLogout} className="border-2 border-solid border-green-600">LogOut</button>
                    </div>
                </div>
                </div>;
    }
}


export default ProfilePage;
