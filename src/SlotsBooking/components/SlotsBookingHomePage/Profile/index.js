import React from "react";
import { Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";
import { LOGIN_PATH } from "../../../../Authentication/constants/routeConstants/RouteConstants";
import { clearUserSession } from "../../../../Authentication/utils/StorageUtils";
import { LogoutBtn } from "./styledComponent";
@observer
class Profile extends React.Component {

    onClickLogout = () => {
        clearUserSession();

        const { history } = this.props;
        history.push(LOGIN_PATH);

    }

    render() {
        return <LogoutBtn onClick={this.onClickLogout}>Logout</LogoutBtn>;
    }
}

export default withRouter(Profile);
