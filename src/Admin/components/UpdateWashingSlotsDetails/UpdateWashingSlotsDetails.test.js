import React from "react";
import AdminStore from "../../stores/AdminStore";
import AdminService from "../../services/AdminServices/index.api";

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import { Provider } from "mobx-react";
import UpdateWashingSlotsDetails from ".";
describe("UpdateWashingSlotsDetails tests", () => {

    let adminStore, adminService;

    beforeEach(() => {
        adminService = new AdminService();
        adminStore = new AdminStore(adminService);
    })


    it('should test UpdateWashingSlotsDetails content', () => {

        const { getByText, debug } = render(
            <Provider adminStore={adminStore}>
                                    <UpdateWashingSlotsDetails/>
                                    </Provider>);

        getByText('ISSUES');
        getByText('WASHING MACHINE');
        getByText('SETTINGS');
        getByText('Profile');
        getByText("Washing Machine ID :");
        getByText('+ Add Slots');
        // debug();
    })

});
