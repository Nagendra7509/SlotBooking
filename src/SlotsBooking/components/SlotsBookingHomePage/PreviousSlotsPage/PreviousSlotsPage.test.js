import React from "react";
import SlotsDashBoardStore from "../../../../SlotsDashBoard/stores/SlotsDashBoardStore";
import DashBoardService from "../../../../SlotsDashBoard/services/DashBoardService/index.api";
import previousSlotsResponse from "../../../../SlotsDashBoard/fixtures/getResponse";

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import { Provider } from "mobx-react";
import SlotsBookingHomePage from ".";
describe("SlotsBookingHomePage tests", () => {

    let slotsDashBoardStore, dashBoardAPIService;

    beforeEach(() => {
        dashBoardAPIService = new DashBoardService();
        slotsDashBoardStore = new SlotsDashBoardStore(dashBoardAPIService);

    })



    it('should test SlotsBookingHomePage content', async() => {

        const mockSuccessPromise = new Promise((resolve, reject) => {
            resolve(previousSlotsResponse)
        })

        const mockdashBoardServiceAPI = jest.fn()
        mockdashBoardServiceAPI.mockReturnValue(mockSuccessPromise)
        dashBoardAPIService.previousSlotsResponseAPI = mockdashBoardServiceAPI


        await slotsDashBoardStore.getPreviousSlotsData()
        //console.log(slotsDashBoardStore.getPreviousSlotsResponseStatus, "tstsfrgf--->");
        const { getByText, debug } = render(<Provider slotsDashBoardStore={slotsDashBoardStore} ><SlotsBookingHomePage/></Provider>);
        //debug();

        getByText('Home');
        getByText('Requests');
        getByText('Report an Issue');
        getByText('Previous Slots');
        getByText('Profile');
        getByText('Number of slots missed:0');
        getByText('DATE');
        getByText('TIME');
        getByText('WASHING MACHINE ID');




    })

});
