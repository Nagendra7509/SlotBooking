import React from "react";
import { API_FAILED, API_FETCHING, API_SUCCESS, API_INITIAL } from "@ib/api-constants";
import AuthenticationStore from ".";
import LoginService from "../../services/LoginService/index.api";
import SignUpService from "../../services/SignUpService/index.api";

/*global jest*/
/*global expect*/

describe('AuthenticationStore test', () => {
    let authenticationStore, loginService, signUpService;

    beforeEach(() => {
        loginService = new LoginService();
        signUpService = new SignUpService();
        authenticationStore = new AuthenticationStore(loginService, signUpService);
    });

    it('should initialising authenticationStore', () => {
        expect(authenticationStore.getUserSignUpStatus).toBe(API_INITIAL);
        expect(authenticationStore.getUserSignUpError).toBe(null);
        expect(authenticationStore.getUserLoginStatus).toBe(API_INITIAL);
        expect(authenticationStore.getUserLoginError).toBe(null);
    });

    it('should test userLogin fetching state', () => {

        const mockLoadingPromise = new Promise((resolve, reject) => {});

        const mockLoginServiceAPI = jest.fn();
        mockLoginServiceAPI.mockReturnValue(mockLoadingPromise);
        loginService.loginAPI = mockLoginServiceAPI;

        authenticationStore.userLogin();
        expect(authenticationStore.getUserLoginStatus).toBe(API_FETCHING);

    });

    it('should test userLogin success state', async() => {

        const mockSuccessPromise = new Promise((resolve, reject) => {
            resolve(200);
        });

        const mockLoginServiceAPI = jest.fn();
        mockLoginServiceAPI.mockReturnValue(mockSuccessPromise);
        loginService.loginAPI = mockLoginServiceAPI;

        await authenticationStore.userLogin();
        expect(authenticationStore.getUserLoginStatus).toBe(API_SUCCESS);

    });


    it('should test userLogin failure state', async() => {

        const mockFailurePromise = new Promise((resolve, reject) => {
            reject(new Error('failure'));
        });

        const mockLoginServiceAPI = jest.fn();
        mockLoginServiceAPI.mockReturnValue(mockFailurePromise);
        loginService.loginAPI = mockLoginServiceAPI;

        await authenticationStore.userLogin();
        expect(authenticationStore.getUserLoginStatus).toBe(API_FAILED);
        expect(authenticationStore.getUserLoginError).toBe(`We're having some trouble completing your request. Please try again.`);

    });




    it('should test userSignUp fetching state', () => {

        const mockLoadingPromise = new Promise((resolve, reject) => {});

        const mockSignUpServiceAPI = jest.fn();
        mockSignUpServiceAPI.mockReturnValue(mockLoadingPromise);
        signUpService.signUpAPI = mockSignUpServiceAPI;

        authenticationStore.userSignUp();
        expect(authenticationStore.getUserSignUpStatus).toBe(API_FETCHING);

    });

    it('should test userSignUp success state', async() => {
        //window.alert = jest.fn();

        const mockSuccessPromise = new Promise((resolve, reject) => {
            resolve(200);
        });

        const mockSignUpServiceAPI = jest.fn();
        mockSignUpServiceAPI.mockReturnValue(mockSuccessPromise);
        signUpService.signUpAPI = mockSignUpServiceAPI;

        await authenticationStore.userSignUp();
        expect(authenticationStore.getUserSignUpStatus).toBe(API_SUCCESS);

        //expect(window.alert).toHaveBeenCalledWith('sign up done successfully');

    });


    it('should test userSignUp failure state', async() => {

        const mockFailurePromise = new Promise((resolve, reject) => {
            reject(new Error('failure'));
        });

        const mockSignUpServiceAPI = jest.fn();
        mockSignUpServiceAPI.mockReturnValue(mockFailurePromise);
        signUpService.signUpAPI = mockSignUpServiceAPI;

        await authenticationStore.userSignUp();
        expect(authenticationStore.getUserSignUpStatus).toBe(API_FAILED);
        expect(authenticationStore.getUserSignUpError).toBe(`We're having some trouble completing your request. Please try again.`);

    });






});
