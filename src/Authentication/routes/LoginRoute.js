import React from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import LoginPage from '../components/LoginPage';
import Strings from '../i18n/strings.json';
import { getAccessToken } from '../utils/StorageUtils';

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
            const { userLogin, postCredentialsOfLogin } = this.props.authenticationStore;
            await postCredentialsOfLogin(this.userName, this.password);
            await userLogin(this.userName, this.password);
            const { loginCredentialsError } = this.props.authenticationStore;

            if (getAccessToken() && loginCredentialsError == "") {
                const { history } = this.props;
                history.push('/slot-booking/DashBoard/');
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

        const {
            userName,
            password,
            onChangeUserNameLogin,
            onChangePasswordLogin,
            onClickLogin,
            errroMessageUserName,
            errorMessagePassword,
            errorMessageLoginButton

        } = this;

        const { getUserLoginStatus } = this.props.authenticationStore;

        return (
            <LoginPage
                userName={userName}
                password={password}
                onChangeUserNameLogin={onChangeUserNameLogin}
                onChangePasswordLogin={onChangePasswordLogin}
                onClickLogin={onClickLogin}
                errroMessageUserName={errroMessageUserName}
                errorMessagePassword={errorMessagePassword}
                errorMessageLoginButton={errorMessageLoginButton}
                getUserLoginStatus={getUserLoginStatus}
            />
        );
    }
}

export default LoginRoute;
