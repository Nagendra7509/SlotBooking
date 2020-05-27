import React from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import LoginPage from "../components/LoginPage";
import Strings from "../i18n/strings.json";

import { getAccessToken } from "../utils/StorageUtils";

@inject('authenticationStore')

@observer
class SignUpRoute extends React.Component {


    @observable userName = "";
    @observable password = "";
    @observable errroMessageUserName = "";
    @observable errorMessagePassword = "";

    @action.bound
    onChangeUserNameLogin(event) {
        this.userName = event.target.value;
    }

    @action.bound
    onChangePasswordLogin(event) {
        this.password = event.target.value;
    }

    onClickLogin = async() => {

        //const { onClickLogin } = this.props.authenticationStore;
        //onClickLogin(this.userName, this.password);
        if (this.userName != "" && this.password != "") {
            //Redirect to DashBoard
            const { userLogin } = this.props.authenticationStore;
            await userLogin(this.userName, this.password);
            console.log(getAccessToken());


            this.errroMessageUserName = "";
            this.errorMessagePassword = "";
            alert("redirect to DashBoard");

        }
        else if (this.userName == "" && this.password == "") {
            this.errroMessageUserName = Strings.login.usernameInavalid;
            this.errorMessagePassword = Strings.login.incorrectPassword;
        }
        else if (this.userName != "" && this.password == "") {
            this.errorMessagePassword = Strings.login.incorrectPassword;
            this.errroMessageUserName = "";
        }
        else {

            this.errroMessageUserName = Strings.login.usernameInavalid;
            this.errorMessagePassword = "";
        }

    }

    render() {

        return <LoginPage
                userName={this.userName}
                password={this.password}
                onChangeUserNameLogin={this.onChangeUserNameLogin}
                onChangePasswordLogin={this.onChangePasswordLogin}
                onClickLogin={this.onClickLogin}
                errroMessageUserName={this.errroMessageUserName}
                errorMessagePassword={this.errorMessagePassword}
        />;
    }
}

export default SignUpRoute;
