import React from "react";
import Cookie from "js-cookie";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Router, Route, withRouter } from "react-router-dom";
import { Provider } from "mobx-react";
import { createMemoryHistory } from "history";
import { API_FAILED, API_FETCHING, API_SUCCESS, API_INITIAL } from "@ib/api-constants";
import { SIGN_UP_PATH } from "../constants/routeConstants/RouteConstants";
import { LOGIN_PATH } from "../constants/routeConstants/RouteConstants";
import SignUpService from "../services/SignUpService/index.api";
import AuthenticationStore from "../stores/AuthenticationStore/index";
import SignUpRoute from "./SignUpRoute.js";


/*global jest*/
/*global expect*/



let mockGetCookie = jest.fn();

Cookie.get = mockGetCookie;


const LocationDisplay = withRouter(({ location }) => (
    <div data-testid="location-display">{location.pathname}</div>
));

describe("SignUp Tests", () => {

    let authAPI, authenticationStore;

    beforeEach(() => {
        authAPI = new SignUpService();
        authenticationStore = new AuthenticationStore(authAPI);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render username empty error message', () => {

        const { getByText, getByRole } = render(
            <Router history={createMemoryHistory()}>
                <SignUpRoute authenticationStore={authenticationStore} />
            </Router>
        );
        const loginButton = getByRole("button", { name: "SIGNUP" });
        fireEvent.click(loginButton);
        getByText(/Enter Username/i);


    });

    it('should render password empty error message', () => {

        const { getByText, getByRole, getByPlaceholderText } = render(
            <Router history={createMemoryHistory()}>
                <SignUpRoute authenticationStore={authenticationStore} />
            </Router>
        );

        const username = "test-user";
        const userNameField = getByPlaceholderText('username');
        const loginButton = getByRole('button', { name: "SIGNUP" });

        fireEvent.change(userNameField, { target: { value: username } });
        fireEvent.click(loginButton);
        getByText(/Enter Password/i);
    });

    it('should submit sign-up on press enter', () => {
        const { getByRole, getByPlaceholderText } = render(
            <Router history={createMemoryHistory()}>
                <SignUpRoute authenticationStore={authenticationStore}/>
            </Router>
        );

        const username = "test-user";
        const password = "test-password";
        const userNameField = getByPlaceholderText("username");
        const passwordField = getByPlaceholderText("password");
        const loginButton = getByRole("button", { name: "SIGNUP" });

        fireEvent.change(userNameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.keyPress(loginButton, { key: "Enter", code: "Enter" });

        waitFor(() => getByRole("button", { name: "SIGNUP" }));

    });





    it("should render signUpRoute success state", async() => {
        const history = createMemoryHistory();
        const route = SIGN_UP_PATH;
        history.push(route);

        const {
            getByPlaceholderText,
            getByRole,
            queryByRole,
            getByTestId,

        } = render(
            <Provider authenticationStore={authenticationStore}>
                <Router history={history}>
                    <Route path={ SIGN_UP_PATH}>
                        <SignUpRoute />
                    </Route>
                    <Route path={LOGIN_PATH}>
                        <LocationDisplay />
                    </Route>
                </Router>
            </Provider>
        );

        const username = "test-user";
        const password = "test-password";

        const usernameField = getByPlaceholderText("username");
        const passwordField = getByPlaceholderText("password");
        const loginButton = getByRole("button", { name: "SIGNUP" });


        fireEvent.change(usernameField, { target: { value: username } });
        fireEvent.change(passwordField, { target: { value: password } });
        fireEvent.click(loginButton);

        waitFor(() => {
            expect(
                queryByRole("button", { name: "SIGNUP" })
            ).not.toBeInTheDocument();

            expect(getByTestId("location-display")).toHaveTextContent(
                LOGIN_PATH
            );
        });
    });


});
