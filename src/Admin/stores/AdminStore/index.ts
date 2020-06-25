import React from 'react'
import { observable, action } from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { getFormattedErrorDescription } from '../../../utils/APIUtils'
import AdminModel from '../models/AdminModel'
import UpdateSlotsModel from '../models/UpdateSlotsModel'
import TimeSlots from '../models/UpdateSlotsModel/TimeSlots'
import AdminService from '../../services/AdminServices/index.fixture'
import {
   APIGetAdminResponseTypes,
   APIGetUpdateSlotsResponseTypes,
   UpdateSlotsRequestObjectTypes,
   NewWashingMachineRequestObjectTypes,
   StatusChangeRequestObjectTypes,
   PostUpdateSlotsRequestObjectTypes
} from '../types'

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

   constructor(adminService: AdminService) {
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
   setGetAdminResponseAPIStatus(status) {
      this.getAdminResponseStatus = status
   }

   @action.bound
   setAdminAPIResponse(response: APIGetAdminResponseTypes | null) {
      this.adminResponse = (response as APIGetAdminResponseTypes).washing_machines.map(
         obj => new AdminModel(obj)
      )

      this.activeWashingMachines = this.adminResponse.filter(
         obj => obj.washingMachineStatus === 'ACTIVE'
      )

      this.inActiveWashingMachines = this.adminResponse.filter(
         obj => obj.washingMachineStatus === 'INACTIVE'
      )
   }

   @action.bound
   setGetAdminAPIError(error) {
      this.getAdminResponseError = error
   }

   @action.bound
   onClickNewWashingMachine(washingMachineNumber: string) {
      let checkingNumberExistOrNot = this.adminResponse.filter(
         obj => obj.washingMachineId === washingMachineNumber
      )

      if (checkingNumberExistOrNot.length === 1) {
         alert('Already Exists Enter another number')
      } else {
         if (washingMachineNumber) {
            const requestObj: NewWashingMachineRequestObjectTypes = {
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

      this.getAdminResponse()
   }

   @action.bound
   onClickUpdateInWashingMachineCard(id: string) {
      this.washingMachineDetailsId = id

      this.updateMachineId = id
      this.updateMachineStatus = this.adminResponse
         .filter(obj => obj.washingMachineId === id)[0]
         .washingMachineStatus.toLowerCase()
      const requestObj: UpdateSlotsRequestObjectTypes = {
         washing_machine_id: id,
         day: 'MONDAY'
      }

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
   }

   @action.bound
   setUpdateWashingMachineAPIResponse(
      response: APIGetUpdateSlotsResponseTypes | null
   ) {
      this.updateSlotsResponse = new UpdateSlotsModel(
         response as APIGetUpdateSlotsResponseTypes
      )
   }

   @action.bound
   setGetUpdateWashingMachineAPIError(error) {
      this.getUpdateSlotsResponseError = error
   }

   @action.bound
   onClickActiveOrInactiveStatus(id: string) {
      const requestObj: StatusChangeRequestObjectTypes = {
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
   onClickCloseBtn(id: string) {
      const updateTimeSlots = this.updateSlotsResponse.timeSlots.filter(
         obj => !(obj.id === id)
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
   onChangeStartTimeInUpdateSlots(id: string, value: string) {
      this.updateSlotsResponse.timeSlots = this.updateSlotsResponse.timeSlots.map(
         obj => {
            if (obj.id === id) {
               obj.onChangeFromTime(value)
            }
            return obj
         }
      )
   }

   @action.bound
   onChangeEndTimeInUpdateSlots(id: string, value: string) {
      this.updateSlotsResponse.timeSlots = this.updateSlotsResponse.timeSlots.map(
         obj => {
            if (obj.id === id) {
               obj.onChangeToTime(value)
            }
            return obj
         }
      )
   }

   @action.bound
   onClickUpdateBtn() {
      const requestObj: PostUpdateSlotsRequestObjectTypes = {
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
      this.getPostUpdateSlotsError = getFormattedErrorDescription(error)

      this.onClickUpdateInWashingMachineCard(this.washingMachineDetailsId)
   }
}

export default AdminStore
