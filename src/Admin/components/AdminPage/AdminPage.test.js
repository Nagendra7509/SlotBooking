import React from "react";
import AdminStore from "../../stores/AdminStore";
import AdminService from "../../services/AdminServices/index.api";
import { Provider } from "mobx-react";

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import AdminPage from ".";
describe("AdminPage tests", () => {
    let adminStore, adminService;

    beforeEach(() => {
        adminService = new AdminService();
        adminStore = new AdminStore(adminService);
    })


    it('should test AdminPage content', () => {

        const { getByText } = render(<Provider adminStore={adminStore}><AdminPage/></Provider>);
        getByText('ISSUES');
        getByText('WASHING MACHINE');
        getByText('SETTINGS');
        getByText('Profile');
        getByText("IssuesPage");

    })

});
