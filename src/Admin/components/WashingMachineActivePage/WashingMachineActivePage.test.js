import React from "react";
import AdminStore from "../../stores/AdminStore";
import AdminService from "../../services/AdminServices/index.api";
import getAdminResponse from "../../fixtures/getAdminResponse";

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import { Provider } from "mobx-react";
import WashingMachineActive from ".";
describe("WashingMachineActive tests", () => {

    let adminStore, adminService;

    beforeEach(() => {
        adminService = new AdminService();
        adminStore = new AdminStore(adminService);
    })


    it('should test UpdateWashingSlotsDetails content', () => {

        adminStore.setAdminAPIResponse(getAdminResponse);

        const { getByText, debug, queryAllByText } = render(
            <Provider adminStore={adminStore}>
                                    <WashingMachineActive activeWashingMachines={adminStore.activeWashingMachines}/>
                                    </Provider>);

        getByText('ISSUES');
        getByText('WASHING MACHINE');
        getByText('SETTINGS');
        getByText('Profile');
        getByText('ACTIVE');
        getByText('INACTIVE');
        getByText('+ Add New Machine');

        //getByText("Washing Machine ID :02");
        queryAllByText('Update Slots');
        queryAllByText('Allocated Slots');
        queryAllByText('Mark As Inactive');


        //debug();
    })

});
