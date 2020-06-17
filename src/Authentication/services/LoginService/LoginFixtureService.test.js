import React from "react";

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import loginResponse from "../../fixtures/getLoginResponse";

import LoginService from "./index.fixture";
describe("LoginService tests", () => {

    let loginService;

    beforeEach(() => {
        loginService = new LoginService();
    })

    it('should test LoginService loginService', async() => {
        expect(await loginService.loginAPI()).toBeDefined;

    });

});
