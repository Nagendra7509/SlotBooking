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
import UpdateSlotsModel from "../models/UpdateSlotsModel";



class AdminStore {

    @observable getAdminResponseStatus;
    @observable getAdminResponseError;
    @observable adminResponse;
    @observable activeWashingMachines = [];
    @observable inActiveWashingMachines = [];
    @observable updateSlotsResponse = [];

    @observable getUpdateSlotsResponseStatus;
    @observable getUpdateSlotsResponseError;
    adminService

    constructor(adminService) {
        this.init();
        this.adminService = adminService;
    }

    init = () => {
        this.getAdminResponseStatus = API_INITIAL;
        this.getAdminResponseError = null;
        this.getUpdateSlotsResponseStatus = API_INITIAL;
        this.getUpdateSlotsResponseError = null;

        this.adminResponse = [];
        this.updateSlotsResponse = [];
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


        //activeWashingMachines
        this.activeWashingMachines = this.adminResponse.filter(obj => obj.washingMachineStatus == "ACTIVE");

        //inActiveWashingMachines
        this.inActiveWashingMachines = this.adminResponse.filter(obj => obj.washingMachineStatus == "INACTIVE");
    }

    @action.bound
    setGetAdminAPIError(error) {
        this.getAdminResponseError = error;
    }

    @action.bound
    onClickNewWashingMachine() {
        //let washingMachineNumber = prompt("Enter WashingMachine Number");

    }

    @action.bound
    onClickUpdateInWashingMachineCard(id) {
        const requestObj = {
            "washing_machine_id": id
        };
        const promise = this.adminService.getUpdateWashingMachineSlotsDetails(requestObj);

        return bindPromiseWithOnSuccess(promise)
            .to(this.setGetUpdateWashingMachineResponseAPIStatus, this.setUpdateWashingMachineAPIResponse)
            .catch(this.setGetUpdateWashingMachineAPIError);
    }


    @action.bound
    setGetUpdateWashingMachineResponseAPIStatus(status) {
        this.getUpdateSlotsResponseStatus = status;
    }

    @action.bound
    setUpdateWashingMachineAPIResponse(response) {
        this.updateSlotsResponse = (new UpdateSlotsModel(response));
        //console.log(this.updateSlotsResponse);
    }

    @action.bound
    setGetUpdateWashingMachineAPIError(error) {
        this.getUpdateSlotsResponseError = error;
    }


}

export default AdminStore;
