import React from 'react';

import { observable, action, computed } from "mobx";
import {
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED
}
from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import AvailableSlotsModel from "../Models/AvailableSlotsModel";
import UpComingSlotDetails from "../Models/UpComingSlotDetails";
import PreviousSlotsModel from "../Models/PreviousSlotsModel";


class SlotsDashBoardStore {

    @observable getResponseStatus
    @observable getResponseError
    @observable dashBoardAPIService
    @observable availableSlotsDates
    @observable previousSlots
    @observable currentDate;
    @observable slotsResponse;
    @observable availableSlotsTimings;
    @observable bookedDateAndTime;
    @observable upcomingSlotsResponse;
    @observable upComingSlotsCurrentDate;
    @observable upComingSlotsDetails = [];
    @observable upComingSlotsDates;

    @observable getConfirmSlotStatus;
    @observable getConfirmSlotError;

    constructor(dashBoardAPIService) {
        this.init();
        this.dashBoardAPIService = dashBoardAPIService;
    }

    init() {
        this.getResponseStatus = API_INITIAL;
        this.getResponseError = null;
        this.availableSlotsDates = [];
        this.previousSlots = [];
        this.currentDate = "";
        this.slotsResponse = [];
        this.availableSlotsTimings = [];
        this.bookedDateAndTime = {};
        this.upcomingSlotsResponse = [];
        this.upComingSlotsCurrentDate = "";
        this.upComingSlotsDetails = {};
        this.upComingSlotsDates = [];

        this.getConfirmSlotStatus = API_INITIAL;
        this.getConfirmSlotError = null;
        this.getCancelSlotStatus = API_INITIAL;
        this.getCancelSlotError = null;
    }

    @action.bound
    getSlotsData() {

        const userPromise = this.dashBoardAPIService.responseAPI();

        return bindPromiseWithOnSuccess(userPromise)
            .to(this.setGetResponseAPIStatus, this.setAPIResponse)
            .catch(this.setGetAPIError);
    }

    @action.bound
    setGetResponseAPIStatus(apiStatus) {
        this.getResponseStatus = apiStatus;
    }

    @action.bound
    setAPIResponse(response) {

        //available slots
        this.slotsResponse = response.available_slots.map(obj => (new AvailableSlotsModel(obj)));
        // this.slotsResponse = response.available_slots;
        this.availableSlotsDates = this.slotsResponse.map(obj => obj.date);
        this.currentDate = this.availableSlotsDates[0];
        this.availableSlotsTimings = this.slotsResponse.find(obj => obj.date == this.currentDate).timingSlots;

        //upcoming slots
        this.upcomingSlotsResponse = response.upcoming_slots.map(obj => new UpComingSlotDetails(obj));
        //this.upcomingSlotsResponse = response.up_coming_slots;
        this.upComingSlotsDates = this.upcomingSlotsResponse.map(obj => obj.date);
        this.upComingSlotsCurrentDate = this.upComingSlotsDates[0];
        this.upComingSlotsDetails = this.upcomingSlotsResponse.find(obj => obj.date == this.upComingSlotsCurrentDate);

        //previous slots
        this.previousSlots = response.previous_slots.map(obj => new PreviousSlotsModel(obj));
    }

    @action.bound
    setGetAPIError(error) {
        this.getResponseError = error;
    }

    @action.bound
    onClickDateAvailableSlots(date) {
        this.currentDate = date;
        //this.availableSlotsTimings = this.slotsResponse.find(obj => obj.date == this.currentDate).timing_slots;
        this.availableSlotsTimings = this.slotsResponse.find(obj => obj.date == this.currentDate).timingSlots;

    }

    @action.bound
    onClickTime(time) {
        const timeDivision = time.split('-');
        this.bookedDateAndTime = {
            "date": this.currentDate,
            "start_time": timeDivision[0],
            "end_time": timeDivision[1]
        };

    }

    @action.bound
    onClickConfirm() {

        if (this.bookedDateAndTime.date) {

            const userPromise = this.dashBoardAPIService.postBookedSlot(this.bookedDateAndTime);

            return bindPromiseWithOnSuccess(userPromise)
                .to(this.setGetResponseConfirmSlotStatus, this.setAPIResponseOfConfirmSlot)
                .catch(this.setGetAPIErrorOfConfirmSlot);

        }
        else {
            alert('please select the time slot');
        }
    }

    @action.bound
    onClickDateUpComingSlots(date) {
        this.upComingSlotsCurrentDate = date;
        this.upComingSlotsDetails = this.upcomingSlotsResponse.find(obj => obj.date == this.upComingSlotsCurrentDate);

    }

    @action.bound
    onClickCancelSlot() {
        const userPromise = this.dashBoardAPIService.postCancelSlot(this.bookedDateAndTime);

        return bindPromiseWithOnSuccess(userPromise)
            .to(this.setGetResponseCancelSlotStatus, this.setAPIResponseOfCancelSlot)
            .catch(this.setGetAPIErrorOfCancelSlot);

    }

    @computed get countOfBookingSlotsPerDay() {
        let counterOfBookingSlots = 0;
        this.availableSlotsTimings.map(obj => {
            if (!obj.is_available) {
                counterOfBookingSlots++;
            }
        });

        return counterOfBookingSlots;

    }


    @action.bound
    setGetResponseConfirmSlotStatus(status) {
        this.getConfirmSlotStatus = status;
    }

    @action.bound
    setAPIResponseOfConfirmSlot(response) {
        this.getSlotsData();
        alert('successfully allocated slot');
        this.bookedDateAndTime = {};
    }


    @action.bound
    setGetAPIErrorOfConfirmSlot(error) {
        alert('slot not allocated');
        this.getConfirmSlotError = error;
    }

    @action.bound
    setGetResponseCancelSlotStatus(status) {

        this.getCancelSlotStatus = status;
    }

    @action.bound
    setAPIResponseOfCancelSlot(response) {
        this.getSlotsData();
        alert('canceled slot successfully');
    }

    @action.bound
    setGetAPIErrorOfCancelSlot(error) {
        alert('slot not canceled successfully');
        this.getCancelSlotError = error;
    }

}

export default SlotsDashBoardStore;
