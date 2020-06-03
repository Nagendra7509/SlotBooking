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
    @observable getPostStatusOfWashingMachineResponseStatus;
    @observable getPostStatusOfWashingMachineResponseError;
    @observable getPostNewWashingMachineIdStatus;
    @observable getPostNewWashingMachineIdError;
    adminService
    @observable updateMachineId
    @observable updateMachineStatus

    constructor(adminService) {
        this.init();
        this.adminService = adminService;
    }

    init = () => {
        this.getAdminResponseStatus = API_INITIAL;
        this.getAdminResponseError = null;
        this.getUpdateSlotsResponseStatus = API_INITIAL;
        this.getUpdateSlotsResponseError = null;
        this.getPostStatusOfWashingMachineResponseStatus = API_INITIAL;
        this.getPostStatusOfWashingMachineResponseError = null;
        this.getPostNewWashingMachineIdStatus = API_INITIAL;
        this.getPostNewWashingMachineIdError = null;
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

        this.activeWashingMachines = this.adminResponse.filter(obj => obj.washingMachineStatus == "ACTIVE");

        this.inActiveWashingMachines = this.adminResponse.filter(obj => obj.washingMachineStatus == "INACTIVE");
    }

    @action.bound
    setGetAdminAPIError(error) {
        this.getAdminResponseError = error;
    }

    @action.bound
    onClickNewWashingMachine() {

        let washingMachineNumber = prompt("Enter WashingMachine Number");
        let checkingNumberExistOrNot = this.adminResponse.filter(obj => obj.washingMachineId === washingMachineNumber);

        if (checkingNumberExistOrNot.length == 1) {
            alert('Already Exists Enter another number');
        }
        else {

            const requestObj = {
                "washing_machine_id": washingMachineNumber
            };
            const promise = this.adminService.postNewWashingMachineIdToAdd(requestObj);

            return bindPromiseWithOnSuccess(promise)
                .to(this.setGetPostNewWashingMachineAPIStatus, this.setPostNewWashingMachineAPIResponse)
                .catch(this.setGetPostNewWashingMachineAPIError);
        }

    }


    @action.bound
    setGetPostNewWashingMachineAPIStatus(status) {
        this.getPostNewWashingMachineIdStatus = status;
    }

    @action.bound
    setPostNewWashingMachineAPIResponse(response) {
        alert("successfully added new Machine");
        this.getAdminResponse();
    }


    @action.bound
    setGetPostNewWashingMachineAPIError(error) {
        this.getPostNewWashingMachineIdError = error;
        this.getAdminResponse();
    }



    @action.bound
    onClickUpdateInWashingMachineCard(id) {
        this.updateMachineId = id;
        this.updateMachineStatus = this.adminResponse.filter(obj => obj.washingMachineId == id)[0].washingMachineStatus.toLowerCase();
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
    }

    @action.bound
    setGetUpdateWashingMachineAPIError(error) {
        this.getUpdateSlotsResponseError = error;
    }

    @action.bound
    onClickActiveOrInactiveStatus(id) {
        const requestObj = {
            "washing_machine_id": id
        };
        const promise = this.adminService.postStatusToChange(requestObj);

        return bindPromiseWithOnSuccess(promise)
            .to(this.setGetPostWashingMachineStatusResponseAPIStatus, this.setPostWashingMachineStatusAPIResponse)
            .catch(this.setGetPostWashingMachineStatusAPIError);
    }

    @action.bound
    setGetPostWashingMachineStatusResponseAPIStatus(status) {
        this.getPostStatusOfWashingMachineResponseStatus = status;
    }

    @action.bound
    setPostWashingMachineStatusAPIResponse(response) {
        alert('success');
        this.getAdminResponse();
    }

    @action.bound
    setGetPostWashingMachineStatusAPIError(error) {
        this.getPostStatusOfWashingMachineResponseError = error;
    }




}

export default AdminStore;
