import React from "react";
import { observer } from "mobx-react";
import { LOGIN_PATH } from "../../../../Authentication/constants/routeConstants/RouteConstants";
import { clearUserSession } from "../../../../Authentication/utils/StorageUtils";
import NavigationBar from "../../../common/components/NavigationBar";
import { LogoutBtn, ProfileViewContainer, ProfilePageAndNavBar } from "./styledComponent";

@observer
class Profile extends React.Component {

    onClickLogout = () => {
        clearUserSession();

        const { history } = this.props;
        history.push(LOGIN_PATH);

    }

    render() {
        return <ProfilePageAndNavBar>
        
                    <NavigationBar/>
                    
                        <ProfileViewContainer>
                            <LogoutBtn onClick={this.onClickLogout}>Logout</LogoutBtn>
                        </ProfileViewContainer>
                        
                </ProfilePageAndNavBar>;
    }
}

export default Profile;
