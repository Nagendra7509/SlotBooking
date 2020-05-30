import Cookie from "js-cookie";
import React from "react";
import { API_FAILED, API_FETCHING, API_SUCCESS, API_INITIAL } from "@ib/api-constants";

import DashBoardService from "../../services/DashBoardService/index.api";
import getSlotsResponse from "../../fixtures/getResponse.json";
import AvailableSlotsModel from "../Models/AvailableSlotsModel";
import UpComingSlotDetails from "../Models/UpComingSlotDetails";
import SlotsDashBoardStore from ".";

/*global jest*/
/*global expect*/


describe('slotsDashBoardStore Tests', () => {
    let slotsDashBoardStore, dashBoardServiceAPI;

    beforeEach(() => {

        dashBoardServiceAPI = new DashBoardService();
        slotsDashBoardStore = new SlotsDashBoardStore(dashBoardServiceAPI);
    });


    it('should test initialising slotsDashBoardStore ', () => {
        expect(slotsDashBoardStore.getResponseStatus).toBe(API_INITIAL);
        expect(slotsDashBoardStore.getResponseError).toBe(null);
        expect(slotsDashBoardStore.availableSlotsDates).toStrictEqual([]);
        expect(slotsDashBoardStore.previousSlots).toStrictEqual([]);
        expect(slotsDashBoardStore.currentDate).toBe("");
        expect(slotsDashBoardStore.slotsResponse).toStrictEqual([]);
        expect(slotsDashBoardStore.availableSlotsTimings).toStrictEqual([]);
        expect(slotsDashBoardStore.bookedDateAndTime).toStrictEqual({});
        expect(slotsDashBoardStore.upcomingSlotsResponse).toStrictEqual([]);
        expect(slotsDashBoardStore.upComingSlotsCurrentDate).toStrictEqual("");
        expect(slotsDashBoardStore.upComingSlotsDetails).toStrictEqual({});
        expect(slotsDashBoardStore.upComingSlotsDates).toStrictEqual([]);
        expect(slotsDashBoardStore.getConfirmSlotStatus).toBe(API_INITIAL);
        expect(slotsDashBoardStore.getConfirmSlotError).toBe(null);
        expect(slotsDashBoardStore.getConfirmSlotStatus).toBe(API_INITIAL);
        expect(slotsDashBoardStore.getConfirmSlotError).toBe(null);

    });

    it('should test fetching slotsDashBoardStore', () => {
        const mockLoadingPromise = new Promise((resolve, reject) => {});
        const mockdashBoardServiceAPI = jest.fn();

        mockdashBoardServiceAPI.mockReturnValue(mockLoadingPromise);
        dashBoardServiceAPI.responseAPI = mockdashBoardServiceAPI;

        slotsDashBoardStore.getSlotsData();
        expect(slotsDashBoardStore.getResponseStatus).toBe(API_FETCHING);
    });

    it('should test getSlotsData success state', async() => {

        const mockSuccessPromise = new Promise((resolve, reject) => {
            resolve(getSlotsResponse);
        });

        const mockdashBoardServiceAPI = jest.fn();
        mockdashBoardServiceAPI.mockReturnValue(mockSuccessPromise);
        dashBoardServiceAPI.responseAPI = mockdashBoardServiceAPI;


        await slotsDashBoardStore.getSlotsData();
        expect(slotsDashBoardStore.getResponseStatus).toBe(API_SUCCESS);

    });

    it('should test getSlotsData failure state', async() => {

        const mockFailurePromise = new Promise((resolve, reject) => {
            reject(
                new Error('failure'));
        });

        const mockdashBoardServiceAPI = jest.fn();
        mockdashBoardServiceAPI.mockReturnValue(mockFailurePromise);
        dashBoardServiceAPI.responseAPI = mockdashBoardServiceAPI;


        await slotsDashBoardStore.getSlotsData();
        expect(slotsDashBoardStore.getResponseStatus).toBe(API_FAILED);
        expect(slotsDashBoardStore.getResponseError).toBe('failure');
    });


    it('should test onClickDateAvailableSlots', () => {

        const date = "25-05-2020";

        slotsDashBoardStore.slotsResponse = getSlotsResponse.available_slots.map(obj => new AvailableSlotsModel(obj));
        slotsDashBoardStore.onClickDateAvailableSlots(date);

        expect(slotsDashBoardStore.currentDate).toBe(date);
        expect(slotsDashBoardStore.availableSlotsTimings.length).toBe(10);


    });

    it('should test onClickTime Availble slots', () => {

        const time = "05:00 AM-06:00 AM";
        const currentDateValue = "28-05-2020";

        slotsDashBoardStore.currentDate = currentDateValue;

        const bookedDateAndTimeSlot = {
            "date": currentDateValue,
            "start_time": "05:00 AM",
            "end_time": "06:00 AM"
        };

        slotsDashBoardStore.onClickTime(time);
        expect(slotsDashBoardStore.bookedDateAndTime).toEqual(bookedDateAndTimeSlot);


    });

    it('should test onClickConfirm availableSlots withOutSelecting time', () => {

        window.alert = jest.fn();
        slotsDashBoardStore.bookedDateAndTime = {};
        slotsDashBoardStore.onClickConfirm();
        expect(window.alert.mock.calls.length).toBe(1);

    });

    it('should test onClickConfirm availableSlots withSelecting time onSuccess', async() => {

        slotsDashBoardStore.bookedDateAndTime = {
            "date": "28-05-2020",
            "start_time": "05:00 AM",
            "end_time": "06:00 AM"
        };

        const mockSuccessPromise = new Promise((resolve, reject) => {
            resolve(getSlotsResponse);
        });

        const mockdashBoardServiceAPI = jest.fn();
        mockdashBoardServiceAPI.mockReturnValue(mockSuccessPromise);
        dashBoardServiceAPI.postBookedSlot = mockdashBoardServiceAPI;

        await slotsDashBoardStore.onClickConfirm();
        expect(slotsDashBoardStore.getConfirmSlotStatus).toBe(API_SUCCESS);

    });

    it('should test onClickConfirm availableSlots withSelecting time onFailure', async() => {

        slotsDashBoardStore.bookedDateAndTime = {
            "date": "28-05-2020",
            "start_time": "05:00 AM",
            "end_time": "06:00 AM"
        }

        const mockFailurePromise = new Promise((resolve, reject) => {
            reject(new Error("failure"));
        });

        const mockdashBoardServiceAPI = jest.fn();
        mockdashBoardServiceAPI.mockReturnValue(mockFailurePromise);
        dashBoardServiceAPI.postBookedSlot = mockdashBoardServiceAPI;

        await slotsDashBoardStore.onClickConfirm();
        expect(slotsDashBoardStore.getConfirmSlotStatus).toBe(API_FAILED);
        expect(slotsDashBoardStore.getConfirmSlotError).toBe('failure');

    });

    it('should test onClickDateUpComingSlots', () => {
        const date = "25-05-2020";

        slotsDashBoardStore.upcomingSlotsResponse = getSlotsResponse.up_coming_slots.map(obj => new UpComingSlotDetails(obj));
        slotsDashBoardStore.onClickDateUpComingSlots(date);

        expect(slotsDashBoardStore.upComingSlotsCurrentDate).toBe(date);
        expect(slotsDashBoardStore.upComingSlotsDetails).toBeDefined;

    });


    it('should test onClickCancelSlot success state', async() => {
        const mockSuccessPromise = new Promise((resolve, reject) => {
            resolve(getSlotsResponse);
        });

        const mockdashBoardServiceAPI = jest.fn();
        mockdashBoardServiceAPI.mockReturnValue(mockSuccessPromise);
        dashBoardServiceAPI.postCancelSlot = mockdashBoardServiceAPI;

        await slotsDashBoardStore.onClickCancelSlot();
        expect(slotsDashBoardStore.getCancelSlotStatus).toBe(API_SUCCESS);


    });

    it('should test onClickCancelSlot failure state', async() => {
        const mockFailurePromise = new Promise((resolve, reject) => {
            reject(new Error("failure"));
        });

        const mockdashBoardServiceAPI = jest.fn();
        mockdashBoardServiceAPI.mockReturnValue(mockFailurePromise);
        dashBoardServiceAPI.postCancelSlot = mockdashBoardServiceAPI;

        await slotsDashBoardStore.onClickCancelSlot();
        expect(slotsDashBoardStore.getCancelSlotStatus).toBe(API_FAILED);
        expect(slotsDashBoardStore.getCancelSlotError).toBe('failure');


    });


    it('should test countOfBookingSlotsPerDay', () => {

        slotsDashBoardStore.availableSlotsTimings = [...getSlotsResponse.available_slots[0].timing_slots];


        expect(slotsDashBoardStore.countOfBookingSlotsPerDay).toBe(10);
    });





});
