import React from 'react'
import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { getUserDisplayableErrorMessage } from '../../../utils/APIUtils'
import AdminModel from '../models/AdminModel'
import UpdateSlotsModel from '../models/UpdateSlotsModel'
import TimeSlots from '../models/UpdateSlotsModel/TimeSlots'
import AdminService from '../../services/AdminServices/index.fixture'

type AdminModelProps = {
   washing_machine_id: string
   status: string
}

class AdminStore {
   @observable getAdminResponseStatus!: number
   @observable getAdminResponseError!: null | string
   @observable adminResponse!: Array<AdminModel>
   @observable activeWashingMachines!: Array<AdminModel>
   @observable inActiveWashingMachines!: Array<AdminModel>
   @observable updateSlotsResponse!: UpdateSlotsModel
   @observable getUpdateSlotsResponseStatus!: number
   @observable getUpdateSlotsResponseError!: null | string
   @observable getPostStatusOfWashingMachineResponseStatus!: number
   @observable getPostStatusOfWashingMachineResponseError!: null | string
   @observable getPostNewWashingMachineIdStatus!: number
   @observable getPostNewWashingMachineIdError!: null | string
   adminService: AdminService
   updateMachineId!: string
   washingMachineDetailsId!: string
   updateMachineStatus!: string
   @observable getPostUpdateSlotsStatus!: number
   @observable getPostUpdateSlotsError!: null | string

   constructor(adminService) {
      this.init()
      this.adminService = adminService
   }

   init = () => {
      this.getAdminResponseStatus = API_INITIAL
      this.getAdminResponseError = null
      this.getUpdateSlotsResponseStatus = API_INITIAL
      this.getUpdateSlotsResponseError = null
      this.getPostStatusOfWashingMachineResponseStatus = API_INITIAL
      this.getPostStatusOfWashingMachineResponseError = null
      this.getPostNewWashingMachineIdStatus = API_INITIAL
      this.getPostNewWashingMachineIdError = null
      this.getPostUpdateSlotsStatus = API_INITIAL
      this.getPostUpdateSlotsError = null
      this.adminResponse = []
      this.activeWashingMachines = []
      this.inActiveWashingMachines = []
   }

   @action.bound
   getAdminResponse() {
      const promise = this.adminService.adminResponse()

      return bindPromiseWithOnSuccess(promise)
         .to(this.setGetAdminResponseAPIStatus, this.setAdminAPIResponse)
         .catch(this.setGetAdminAPIError)
   }

   @action.bound
   setGetAdminResponseAPIStatus(status: number) {
      this.getAdminResponseStatus = status
   }

   @action.bound
   setAdminAPIResponse(response) {
      this.adminResponse = response.washing_machines.map(
         (obj: AdminModelProps) => new AdminModel(obj)
      )

      this.activeWashingMachines = this.adminResponse.filter(
         obj => obj.washingMachineStatus == 'ACTIVE'
      )

      this.inActiveWashingMachines = this.adminResponse.filter(
         obj => obj.washingMachineStatus == 'INACTIVE'
      )
   }

   @action.bound
   setGetAdminAPIError(error) {
      this.getAdminResponseError = error
   }

   @action.bound
   onClickNewWashingMachine(washingMachineNumber) {
      //let washingMachineNumber = prompt("Enter WashingMachine Number");
      let checkingNumberExistOrNot = this.adminResponse.filter(
         obj => obj.washingMachineId === washingMachineNumber
      )

      if (checkingNumberExistOrNot.length == 1) {
         alert('Already Exists Enter another number')
      } else {
         if (washingMachineNumber) {
            const requestObj = {
               washing_machine_id: washingMachineNumber
            }
            const promise = this.adminService.postNewWashingMachineIdToAdd(
               requestObj
            )

            return bindPromiseWithOnSuccess(promise)
               .to(
                  this.setGetPostNewWashingMachineAPIStatus,
                  this.setPostNewWashingMachineAPIResponse
               )
               .catch(this.setGetPostNewWashingMachineAPIError)
         } else {
            alert('please enter washing machine number')
         }
      }
   }

   @action.bound
   setGetPostNewWashingMachineAPIStatus(status) {
      this.getPostNewWashingMachineIdStatus = status
   }

   @action.bound
   setPostNewWashingMachineAPIResponse(response) {
      //alert("successfully added new Machine");
      this.getAdminResponse()
   }

   @action.bound
   setGetPostNewWashingMachineAPIError(error) {
      this.getPostNewWashingMachineIdError = error
      //alert("new washing machine is not added");
      this.getAdminResponse()
   }

   @action.bound
   onClickUpdateInWashingMachineCard(id) {
      //alert('update click');
      this.washingMachineDetailsId = id
      //console.log(this.adminResponse);
      this.updateMachineId = id
      this.updateMachineStatus = this.adminResponse
         .filter(obj => obj.washingMachineId == id)[0]
         .washingMachineStatus.toLowerCase()
      const requestObj = {
         washing_machine_id: id,
         day: 'MONDAY'
      }
      //console.log(requestObj, "id ---->store");
      const promise = this.adminService.getUpdateWashingMachineSlotsDetails(
         requestObj
      )

      return bindPromiseWithOnSuccess(promise)
         .to(
            this.setGetUpdateWashingMachineResponseAPIStatus,
            this.setUpdateWashingMachineAPIResponse
         )
         .catch(this.setGetUpdateWashingMachineAPIError)
   }

   @action.bound
   setGetUpdateWashingMachineResponseAPIStatus(status) {
      this.getUpdateSlotsResponseStatus = status
      //console.log(this.getUpdateSlotsResponseStatus, 'status')
   }

   @action.bound
   setUpdateWashingMachineAPIResponse(response) {
      //console.log(response, 'response')
      this.updateSlotsResponse = new UpdateSlotsModel(response)
      console.log(this.updateSlotsResponse, 'update Response 1234')
   }

   @action.bound
   setGetUpdateWashingMachineAPIError(error) {
      this.getUpdateSlotsResponseError = error
      //console.log(this.getUpdateSlotsResponseError, 'error')
   }

   @action.bound
   onClickActiveOrInactiveStatus(id) {
      const requestObj = {
         washing_machine_id: id
      }
      const promise = this.adminService.postStatusToChange(requestObj)

      return bindPromiseWithOnSuccess(promise)
         .to(
            this.setGetPostWashingMachineStatusResponseAPIStatus,
            this.setPostWashingMachineStatusAPIResponse
         )
         .catch(this.setGetPostWashingMachineStatusAPIError)
   }

   @action.bound
   setGetPostWashingMachineStatusResponseAPIStatus(status) {
      this.getPostStatusOfWashingMachineResponseStatus = status
   }

   @action.bound
   setPostWashingMachineStatusAPIResponse(response) {
      //alert('success');
      this.getAdminResponse()
   }

   @action.bound
   setGetPostWashingMachineStatusAPIError(error) {
      this.getPostStatusOfWashingMachineResponseError = error
      //alert('failed status not updated');
   }

   @action.bound
   onClickCloseBtn(id) {
      const updateTimeSlots = this.updateSlotsResponse.timeSlots.filter(
         obj => !(obj.id == id)
      )
      this.updateSlotsResponse.timeSlots = updateTimeSlots
   }

   @action.bound
   onClickAddNewSlot() {
      let startTime = prompt(
         'Enter startTime with the help of slots Table'
      ) as string
      let endTime = prompt(
         'Enter endTime with the help of slots Table'
      ) as string

      if (startTime && endTime) {
         const newSlot = { start_time: startTime, end_time: endTime }
         this.updateSlotsResponse.timeSlots.push(new TimeSlots(newSlot))
      } else {
         alert('Enter Valid Time Slot')
      }
   }

   @action.bound
   onChangeStartTimeInUpdateSlots(id, value) {
      this.updateSlotsResponse.timeSlots = this.updateSlotsResponse.timeSlots.map(
         obj => {
            if (obj.id == id) {
               obj.onChangeFromTime(value)
            }
            return obj
         }
      )
   }

   @action.bound
   onChangeEndTimeInUpdateSlots(id, value) {
      this.updateSlotsResponse.timeSlots = this.updateSlotsResponse.timeSlots.map(
         obj => {
            if (obj.id == id) {
               obj.onChangeToTime(value)
            }
            return obj
         }
      )
   }

   @action.bound
   onClickUpdateBtn() {
      const requestObj = {
         washing_machine_id: this.updateSlotsResponse.washingMachineId,
         day: this.updateSlotsResponse.day,
         time_slots: this.updateSlotsResponse.timeSlots.map(obj => ({
            start_time: obj.startTime,
            end_time: obj.endTime
         }))
      }

      const promise = this.adminService.postUpdateSlotsDetails(requestObj)

      return bindPromiseWithOnSuccess(promise)
         .to(
            this.setGetPostUpdateSlotsResponseAPIStatus,
            this.setGetPostUpdateSlotsAPIResponse
         )
         .catch(this.setGetPostUpdateSlotsAPIError)
   }

   @action.bound
   setGetPostUpdateSlotsResponseAPIStatus(status) {
      this.getPostUpdateSlotsStatus = status
   }

   @action.bound
   setGetPostUpdateSlotsAPIResponse(response) {
      //alert("successfully updated");
   }

   @action.bound
   setGetPostUpdateSlotsAPIError(error) {
      this.getPostUpdateSlotsError = getUserDisplayableErrorMessage(error)
      alert(this.getPostUpdateSlotsError)
      this.onClickUpdateInWashingMachineCard(this.washingMachineDetailsId)
   }
}

export default AdminStore