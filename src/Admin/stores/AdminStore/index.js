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
import TimeSlots from "../models/UpdateSlotsModel/TimeSlots";



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
    @observable getPostUpdateSlotsStatus;
    @observable getPostUpdateSlotsError;

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
        this.getPostUpdateSlotsStatus = API_INITIAL;
        this.getPostUpdateSlotsError = null;
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
            if (washingMachineNumber) {
                const requestObj = {
                    "washing_machine_id": washingMachineNumber
                };
                const promise = this.adminService.postNewWashingMachineIdToAdd(requestObj);

                return bindPromiseWithOnSuccess(promise)
                    .to(this.setGetPostNewWashingMachineAPIStatus, this.setPostNewWashingMachineAPIResponse)
                    .catch(this.setGetPostNewWashingMachineAPIError);
            }
            else {
                alert('enter washing machine number')
            }
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
        alert("new washing machine is not added" + error);
        this.getAdminResponse();
    }



    @action.bound
    onClickUpdateInWashingMachineCard(id) {
        this.updateMachineId = id;
        this.updateMachineStatus = this.adminResponse.filter(obj => obj.washingMachineId == id)[0].washingMachineStatus.toLowerCase();
        const requestObj = {
            "washing_machine_id": id,
            "day": "Monday"
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
        alert('failed status not updated' + error);
    }



    @action.bound
    onClickCloseBtn(id) {
        const updateTimeSlots = this.updateSlotsResponse.timeSlots.filter(obj => !(obj.id == id));
        this.updateSlotsResponse.timeSlots = updateTimeSlots;
    }

    @action.bound
    onClickAddNewSlot() {
        let startTime = prompt("Enter startTime with the help of slots Table");
        let endTime = prompt("Enter endTime with the help of slots Table");

        if (startTime.length == 8 && endTime.length == 8) {
            const newSlot = { "start_time": startTime, "end_time": endTime }
            const addTimeslot = [...this.updateSlotsResponse.timeSlots, new TimeSlots(newSlot)]
            this.updateSlotsResponse.timeSlots = addTimeslot;

        }
        else {
            alert("Enter Valid Time Slot")
        }
    }


    @action.bound
    onChangeStartTimeInUpdateSlots(id, value) {
        this.updateSlotsResponse.timeSlots = this.updateSlotsResponse.timeSlots.map(obj => {
            if (obj.id == id) {
                obj.onChangeFromTime(value);
            }
            return obj;
        });
    }

    @action.bound
    onChangeEndTimeInUpdateSlots(id, value) {
        this.updateSlotsResponse.timeSlots = this.updateSlotsResponse.timeSlots.map(obj => {
            if (obj.id == id) {
                obj.onChangeToTime(value);
            }
            return obj;
        });
    }

    @action.bound
    onClickUpdateBtn() {
        const requestObj = {
            "washing_machine_id": this.updateSlotsResponse.washingMachineId,
            "day": this.updateSlotsResponse.day,
            "time_slots": this.updateSlotsResponse.timeSlots.map(obj => ({ "start_time": obj.startTime, "end_time": obj.endTime }))
        }

        const promise = this.adminService.postUpdateSlotsDetails(requestObj);

        return bindPromiseWithOnSuccess(promise)
            .to(this.setGetPostUpdateSlotsResponseAPIStatus, this.setGetPostUpdateSlotsAPIResponse)
            .catch(this.setGetPostUpdateSlotsAPIError);
    }

    @action.bound
    setGetPostUpdateSlotsResponseAPIStatus(status) {
        this.getPostUpdateSlotsStatus = status;
    }

    @action.bound
    setGetPostUpdateSlotsAPIResponse(response) {
        alert("successfully updated");
    }

    @action.bound
    setGetPostUpdateSlotsAPIError(error) {
        this.getPostUpdateSlotsError = error;
        alert("data not updated" + error);
    }

}

export default AdminStore;
