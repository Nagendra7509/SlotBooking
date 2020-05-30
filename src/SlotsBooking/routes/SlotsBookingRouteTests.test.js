import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "mobx-react";
import SlotsBookingRoute from "./SlotsBookingRoute";
import SlotsDashBoardStore from "../../SlotsDashBoard/stores/SlotsDashBoardStore";
import DashBoardService from "../../SlotsDashBoard/services/DashBoardService/index.api";
import SlotsBookingHomePage from "../components/SlotsBookingHomePage";
import getResponse from "../../SlotsDashBoard/fixtures/getResponse.json";
import AvailableSlotsModel from "../../SlotsDashBoard/stores/Models/AvailableSlotsModel";

describe('SlotsBooking Component Test cases', () => {
    let slotsDashBoardStore, dashBoardService;

    beforeEach(() => {
        dashBoardService = new DashBoardService();
        slotsDashBoardStore = new SlotsDashBoardStore(dashBoardService);
    });

    it('should test SlotsBooking NavItems', () => {

        const { getByText } = render(
            <Provider slotsDashBoardStore={slotsDashBoardStore}>
                <SlotsBookingRoute/>
            </Provider>);

        getByText('Home');
        getByText('Requests');
        getByText('Report an Issue');
        getByText('Previous Slots');
        getByText('Profile');
        getByText('Number of slots missed:0')

    });

    it('should test Home Page', () => {

        slotsDashBoardStore.setAPIResponse(getResponse);


        console.log(getResponse);
        const { getByText, getByRole } = render(
            <Provider slotsDashBoardStore={slotsDashBoardStore}>
                <SlotsBookingRoute />
            </Provider>
        );


        console.log(slotsDashBoardStore.slotsResponse, "hello");
        getByText('Available Slots');
        getByText('Upcoming Slots');
        // getByRole("button", { name: "05:00 AM-06:00 AM" })
        //getByRole("button", { name: "LOGIN" })

    });

});
