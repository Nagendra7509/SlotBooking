import React from "react";
import { observable, action } from "mobx";
import {
    API_INITIAL,
    API_FETCHING,
    API_SUCCESS,
    API_FAILED
}
from '@ib/api-constants';
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise';
import AdminModel from "../models/AdminModel";



class AdminStore {

    @observable getAdminResponseStatus;
    @observable getAdminResponseError;
    @observable adminResponse;
    @observable activeWashingMachines = [];
    @observable inActiveWashingMachines = [];
    adminService

    constructor(adminService) {
        this.init();
        this.adminService = adminService;
    }

    init = () => {
        this.getAdminResponseStatus = API_INITIAL;
        this.getAdminResponseError = null;
        this.adminResponse = [];
        this.activeWashingMachines = [];
        this.inActiveWashingMachines = [];
    }

    @action.bound
    getAdminResponse() {

        const promise = this.adminService.adminResponse();

        return bindPromiseWithOnSuccess(promise)
            .to(this.setGetAdminResponseAPIStatus, this.setAdminAPIResponse)
            .catch(this.setGetAdminAPIError);
    }

    @action.bound
    setGetAdminResponseAPIStatus(status) {
        this.getAdminResponseStatus = status;
    }

    @action.bound
    setAdminAPIResponse(response) {
        this.adminResponse = response.washing_machines.map(obj => new AdminModel(obj));
        //console.log(this.adminResponse, "response");

        //activeWashingMachines
        this.activeWashingMachines = this.adminResponse.filter(obj => obj.washingMachineStatus == "ACTIVE");

        //inActiveWashingMachines
        this.inActiveWashingMachines = this.adminResponse.filter(obj => obj.washingMachineStatus == "INACTIVE");


        console.log(this.activeWashingMachines, "active");
        console.log(this.inActiveWashingMachines, "inActive");
    }

    @action.bound
    setGetAdminAPIError(error) {
        this.getAdminResponseError = error;
    }


}

export default AdminStore;
