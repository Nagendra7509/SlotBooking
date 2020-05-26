import React from "react";

import { observable, action } from "mobx";
import { Redirect } from "react-router-dom";

class AuthenticationStore {

    @observable errorMessage;

    @action.bound
    onClickSignUp(userName, password, confirmPassword) {
        console.log('hello');
    }

    @action.bound
    onClickLogin(userName, password) {
        console.log('called');

    }

}

export default AuthenticationStore;
