import React from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import LoginPage from '../components/LoginPage';
import Strings from '../i18n/strings.json';

import { getAccessToken, clearUserSession } from '../utils/StorageUtils';

@inject('authenticationStore')
@observer
class LoginRoute extends React.Component {

    @observable userName = ''
    @observable password = ''
    @observable errroMessageUserName = 'noError'
    @observable errorMessagePassword = 'noError'
    @observable errorMessageLoginButton = "noError";


    @action.bound
    onChangeUserNameLogin(event) {
        this.userName = event.target.value;
    }

    @action.bound
    onChangePasswordLogin(event) {
        this.password = event.target.value;
    }

    onClickLogin = async() => {

        if (this.userName != '' && this.password != '') {
            this.errroMessageUserName = 'noError';
            this.errorMessagePassword = 'noError';
            const { userLogin } = this.props.authenticationStore;
            await userLogin(this.userName, this.password);
            if (getAccessToken()) {

                const { history } = this.props;
                setTimeout(() => history.push('/slot-booking/DashBoard/'), 1000);
            }
            else {

                this.errorMessageLoginButton = Strings.login.serverError;
            }


        }
        else if (this.userName == '' && this.password == '') {
            this.errroMessageUserName = Strings.login.usernameInavalid;
            this.errorMessagePassword = Strings.login.incorrectPassword;
            this.errorMessageLoginButton = "noError";
        }
        else if (this.userName != '' && this.password == '') {
            this.errorMessagePassword = Strings.login.incorrectPassword;
            this.errroMessageUserName = 'noError';
            this.errorMessageLoginButton = "noError";
        }
        else {
            this.errroMessageUserName = Strings.login.usernameInavalid;
            this.errorMessagePassword = 'noError';
            this.errorMessageLoginButton = "noError";
        }
    }

    render() {
        return (
            <LoginPage
            userName={this.userName}
            password={this.password}
            onChangeUserNameLogin={this.onChangeUserNameLogin}
            onChangePasswordLogin={this.onChangePasswordLogin}
            onClickLogin={this.onClickLogin}
            errroMessageUserName={this.errroMessageUserName}
            errorMessagePassword={this.errorMessagePassword}
            errorMessageLoginButton={this.errorMessageLoginButton}
         />
        );
    }
}

export default LoginRoute;
