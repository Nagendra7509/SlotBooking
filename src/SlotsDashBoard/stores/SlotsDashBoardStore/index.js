import React from 'react'

import { observable, action, computed } from 'mobx'
import {
   API_INITIAL,
   API_FETCHING,
   API_SUCCESS,
   API_FAILED
} from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import AvailableSlotsModel from '../models/AvailableSlotsModel'
import UpComingSlotDetails from '../models/UpComingSlotDetails'
import PreviousSlotsModel from '../models/PreviousSlotsModel'
import { getAccessToken } from '../../../Authentication/utils/StorageUtils'

class SlotsDashBoardStore {
   @observable getAvailableSlotsResponseStatus
   @observable getAvailableSlotsResponseError

   @observable getUpcomingSlotsResponseStatus
   @observable getUpcomingSlotsResponseError

   @observable getPreviousSlotsResponseStatus
   @observable getPreviousSlotsResponseError

   dashBoardAPIService
   @observable availableSlotsDates
   @observable previousSlots
   @observable currentDate
   @observable availableSlotsResponse

   @observable availableSlotsTimings
   @observable bookedDateAndTime
   @observable upcomingSlotsResponse
   @observable upComingSlotsCurrentDate
   @observable upComingSlotsDetails = []
   @observable upComingSlotsDates

   @observable getConfirmSlotStatus
   @observable getConfirmSlotError

   @observable getCancelSlotStatus
   @observable getCancelSlotError

   constructor(dashBoardAPIService) {
      this.init()
      this.dashBoardAPIService = dashBoardAPIService
   }

   init() {
      this.getAvailableSlotsResponseStatus = API_INITIAL
      this.getAvailableSlotsResponseError = null

      this.getUpcomingSlotsResponseStatus = API_INITIAL
      this.getUpcomingSlotsResponseError = null

      this.getPreviousSlotsResponseStatus = API_INITIAL
      this.getPreviousSlotsResponseError = null

      this.availableSlotsDates = []
      this.previousSlots = []
      this.currentDate = ''
      this.availableSlotsResponse = []
      this.availableSlotsTimings = []
      this.bookedDateAndTime = {}
      this.upcomingSlotsResponse = []
      this.upComingSlotsCurrentDate = ''
      this.upComingSlotsDetails = {}
      this.upComingSlotsDates = []

      this.getConfirmSlotStatus = API_INITIAL
      this.getConfirmSlotError = null

      this.getCancelSlotStatus = API_INITIAL
      this.getCancelSlotError = null
   }

   @action.bound
   getAvailableSlotsData() {
      const promise = this.dashBoardAPIService.availableSlotsResponseAPI()

      return bindPromiseWithOnSuccess(promise)
         .to(
            this.setGetResponseAvailableSlotsAPIStatus,
            this.setAPIResponseAvailableSlots
         )
         .catch(this.setGetAvailableSlotsAPIError)
   }

   @action.bound
   setGetResponseAvailableSlotsAPIStatus(apiStatus) {
      this.getAvailableSlotsResponseStatus = apiStatus
      //console.log(this.getAvailableSlotsResponseStatus, 'status')
   }

   @action.bound
   setAPIResponseAvailableSlots(response) {
      //available slots
      this.availableSlotsResponse = response.available_slots.map(
         obj => new AvailableSlotsModel(obj)
      )

      this.availableSlotsDates = this.availableSlotsResponse.map(
         obj => obj.date
      )

      this.currentDate = this.availableSlotsDates[0]

      this.availableSlotsTimings = this.availableSlotsResponse.find(
         obj => obj.date == this.currentDate
      ).timingSlots
   }

   @action.bound
   setGetAvailableSlotsAPIError(error) {
      this.getAvailableSlotsResponseError = error
      //console.log(this.getAvailableSlotsResponseError, 'error')
   }

   @action.bound
   getUpcomingSlotsData() {
      const promise = this.dashBoardAPIService.upcomingSlotsResponseAPI()

      return bindPromiseWithOnSuccess(promise)
         .to(
            this.setGetResponseUpcomingSlotsAPIStatus,
            this.setAPIResponseUpcomingSlots
         )
         .catch(this.setGetUpcomingSlotsAPIError)
   }

   @action.bound
   setGetResponseUpcomingSlotsAPIStatus(apiStatus) {
      this.getUpcomingSlotsResponseStatus = apiStatus
   }

   @action.bound
   setAPIResponseUpcomingSlots(response) {
      //console.log(this.upcomingSlotsResponse, 'upcoming slots Response')
      //upcoming slots
      this.upcomingSlotsResponse = response.upcoming_slots.map(
         obj => new UpComingSlotDetails(obj)
      )
      this.upComingSlotsDates = this.upcomingSlotsResponse.map(obj => obj.date)
      this.upComingSlotsCurrentDate = this.upComingSlotsDates[0]
      this.upComingSlotsDetails = this.upcomingSlotsResponse.find(
         obj => obj.date == this.upComingSlotsCurrentDate
      )
   }

   @action.bound
   setGetUpcomingSlotsAPIError(error) {
      this.getUpcomingSlotsResponseError = error
   }

   @action.bound
   getPreviousSlotsData() {
      // const requestObj = {
      //     "access_token": getAccessToken()
      // };

      const promise = this.dashBoardAPIService.previousSlotsResponseAPI()

      return bindPromiseWithOnSuccess(promise)
         .to(
            this.setGetResponsePreviousSlotsAPIStatus,
            this.setAPIResponsePreviousSlots
         )
         .catch(this.setGetPreviousSlotsAPIError)
   }

   @action.bound
   setGetResponsePreviousSlotsAPIStatus(apiStatus) {
      this.getPreviousSlotsResponseStatus = apiStatus
   }

   @action.bound
   setAPIResponsePreviousSlots(response) {
      //previous slots
      this.previousSlots = response.previous_slots.map(
         obj => new PreviousSlotsModel(obj)
      )
   }

   @action.bound
   setGetPreviousSlotsAPIError(error) {
      this.getPreviousSlotsResponseError = error
   }

   @action.bound
   onClickDateAvailableSlots(date) {
      this.currentDate = date
      //this.availableSlotsTimings = this.slotsResponse.find(obj => obj.date == this.currentDate).timing_slots;
      this.availableSlotsTimings = this.availableSlotsResponse.find(
         obj => obj.date == this.currentDate
      ).timingSlots
   }

   @action.bound
   onClickTime(time) {
      const timeDivision = time.split('-')
      this.bookedDateAndTime = {
         date: this.currentDate,
         start_time: timeDivision[0],
         end_time: timeDivision[1]
      }
   }

   @action.bound
   onClickConfirm() {
      if (this.bookedDateAndTime.date) {
         //console.log(this.bookedDateAndTime);
         const promise = this.dashBoardAPIService.postBookedSlot(
            this.bookedDateAndTime
         )

         return bindPromiseWithOnSuccess(promise)
            .to(
               this.setGetResponseConfirmSlotStatus,
               this.setAPIResponseOfConfirmSlot
            )
            .catch(this.setGetAPIErrorOfConfirmSlot)
      } else {
         alert('please select the time slot')
      }
   }

   @action.bound
   onClickDateUpComingSlots(date) {
      this.upComingSlotsCurrentDate = date
      this.upComingSlotsDetails = this.upcomingSlotsResponse.find(
         obj => obj.date == this.upComingSlotsCurrentDate
      )
   }

   @action.bound
   onClickCancelSlot() {
      const promise = this.dashBoardAPIService.postCancelSlot(
         this.bookedDateAndTime
      )
      //Pending
      return bindPromiseWithOnSuccess(promise)
         .to(
            this.setGetResponseCancelSlotStatus,
            this.setAPIResponseOfCancelSlot
         )
         .catch(this.setGetAPIErrorOfCancelSlot)
   }

   @computed get countOfBookingSlotsPerDay() {
      let counterOfBookingSlots = 0
      this.availableSlotsTimings.map(obj => {
         if (!obj.is_available) {
            counterOfBookingSlots++
         }
      })

      return counterOfBookingSlots
   }

   @action.bound
   setGetResponseConfirmSlotStatus(status) {
      this.getConfirmSlotStatus = status
   }

   @action.bound
   setAPIResponseOfConfirmSlot(response) {
      this.getAvailableSlotsData()
      this.getUpcomingSlotsData()
      //alert('successfully allocated slot');
      this.bookedDateAndTime = {}
   }

   @action.bound
   setGetAPIErrorOfConfirmSlot(error) {
      //alert('slot not allocated');
      this.getConfirmSlotError = error
   }

   @action.bound
   setGetResponseCancelSlotStatus(status) {
      this.getCancelSlotStatus = status
   }

   @action.bound
   setAPIResponseOfCancelSlot(response) {
      this.getUpcomingSlotsData()
      //alert('canceled slot successfully');
   }

   @action.bound
   setGetAPIErrorOfCancelSlot(error) {
      //alert('slot not canceled successfully');
      this.getCancelSlotError = error
   }
}

export default SlotsDashBoardStore

// postBookedSlot
