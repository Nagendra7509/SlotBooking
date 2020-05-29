import React from 'react';

import { observable, action } from "mobx";
import {
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED
}
from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import storeData from "../../fixtures/storeData";

class SlotsDashBoardStore {
    @observable getResponseStatus
    @observable getResponseError
    @observable dashBoardAPIService
    @observable availableSlotsDates
    @observable previousSlots
    @observable currentDate;
    @observable slotsResponse = [];
    @observable availableSlotsTimings;
    @observable bookedDateAndTime;
    @observable upcomingSlotsResponse;
    @observable upComingSlotsCurrentDate;
    @observable upComingSlotsDetails;
    @observable upComingSlotsDates;

    constructor(dashBoardAPIService) {
        this.init();
        this.dashBoardAPIService = dashBoardAPIService;
    }

    init() {
        this.getResponseStatus = API_INITIAL;
        this.getResponseError = null;
        this.availableSlotsDates = [];
        this.previousSlots = [];
        this.currentDate;
        this.slotsResponse = [];
        this.availableSlotsTimings = [];
        this.bookedDateAndTime = {};
        this.upcomingSlotsResponse = [];
        this.upComingSlotsCurrentDate;
        this.upComingSlotsDetails = [];
        this.upComingSlotsDates = [];
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
        this.slotsResponse = response.available_slots;
        this.availableSlotsDates = this.slotsResponse.map(obj => obj.date);
        this.currentDate = this.availableSlotsDates[0];
        this.availableSlotsTimings = this.slotsResponse.find(obj => obj.date == this.currentDate).timing_slots;


        //upcoming slots
        this.upcomingSlotsResponse = response.up_coming_slots;
        this.upComingSlotsDates = this.upcomingSlotsResponse.map(obj => obj.date);
        this.upComingSlotsCurrentDate = this.upComingSlotsDates[0];
        this.upComingSlotsDetails = this.upcomingSlotsResponse.find(obj => obj.date == this.upComingSlotsCurrentDate);

        //previous slots
        this.previousSlots = response.previous_slots;
        //console.log(this.previousSlots);

    }

    @action.bound
    setGetAPIError(error) {
        this.getResponseError = error;
    }

    @action.bound
    onClickDateAvailableSlots(date) {
        this.currentDate = date;
        this.availableSlotsTimings = this.slotsResponse.find(obj => obj.date == this.currentDate).timing_slots;
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
        console.log(this.bookedDateAndTime.date, "hello");

        if (this.bookedDateAndTime.date) {
            //this.getSlotsData();
        }
        else {
            alert('please select the time slot');
        }


    }

    @action.bound
    onClickDateUpComingSlots(date) {
        this.upComingSlotsCurrentDate = date;
        this.upComingSlotsDetails = this.upcomingSlotsResponse.find(obj => obj.date == this.upComingSlotsCurrentDate);
        //console.log(this.upComingSlotsDetails);

    }

    @action.bound
    onClickCancelSlot() {
        //console.log('cancel');
        //this.bookedDateAndTime


    }

}

export default SlotsDashBoardStore;
