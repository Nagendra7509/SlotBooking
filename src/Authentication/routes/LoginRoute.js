import React from "react";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import LoginPage from "../components/LoginPage";

@inject('authenticationStore')

@observer
class SignUpRoute extends React.Component {


    @observable userName = "";
    @observable password = "";

    @action.bound
    onChangeUserNameLogin(event) {
        this.userName = event.target.value;
    }

    @action.bound
    onChangePasswordLogin(event) {
        this.password = event.target.value;
    }

    onClickLogin = () => {

        const { onClickLogin } = this.props.authenticationStore;
        onClickLogin(this.userName, this.password);

    }

    render() {

        return <LoginPage
                userName={this.userName}
                password={this.password}
                onChangePasswordSignUp={this.onChangePasswordSignUp}
                onChangeUserNameSignUp={this.onChangeUserNameSignUp}
                onClickLogin={this.onClickLogin}
        />;
    }
}

export default SignUpRoute;
