import Cookie from 'js-cookie'
import React from 'react'
import {
   API_FAILED,
   API_FETCHING,
   API_SUCCESS,
   API_INITIAL
}
from '@ib/api-constants'

import DashBoardService from '../../services/DashBoardService/index.api'
import getSlotsResponse from '../../fixtures/getResponse.json'
import AvailableSlotsModel from '../models/AvailableSlotsModel'
import UpComingSlotDetails from '../models/UpComingSlotDetails'
import SlotsDashBoardStore from '.'

/*global jest*/
/*global expect*/

describe('slotsDashBoardStore Tests', () => {
   let slotsDashBoardStore, dashBoardServiceAPI

   beforeEach(() => {
      dashBoardServiceAPI = new DashBoardService()
      slotsDashBoardStore = new SlotsDashBoardStore(dashBoardServiceAPI)
   })

   it('should test initialising slotsDashBoardStore ', () => {
      expect(slotsDashBoardStore.getAvailableSlotsResponseStatus).toBe(
         API_INITIAL
      )
      expect(slotsDashBoardStore.getAvailableSlotsResponseError).toBe(null)
      expect(slotsDashBoardStore.getUpcomingSlotsResponseStatus).toBe(
         API_INITIAL
      )
      expect(slotsDashBoardStore.getUpcomingSlotsResponseError).toBe(null)
      expect(slotsDashBoardStore.getPreviousSlotsResponseStatus).toBe(
         API_INITIAL
      )
      expect(slotsDashBoardStore.getPreviousSlotsResponseError).toBe(null)
      expect(slotsDashBoardStore.getConfirmSlotStatus).toBe(API_INITIAL)
      expect(slotsDashBoardStore.getConfirmSlotError).toBe(null)
      expect(slotsDashBoardStore.getConfirmSlotStatus).toBe(API_INITIAL)
      expect(slotsDashBoardStore.getConfirmSlotError).toBe(null)

      expect(slotsDashBoardStore.availableSlotsDates).toStrictEqual([])
      expect(slotsDashBoardStore.previousSlots).toStrictEqual([])
      expect(slotsDashBoardStore.currentDate).toBe('')
      expect(slotsDashBoardStore.availableSlotsResponse).toStrictEqual([])
      expect(slotsDashBoardStore.availableSlotsTimings).toStrictEqual([])
      expect(slotsDashBoardStore.bookedDateAndTime).toStrictEqual({})
      expect(slotsDashBoardStore.upcomingSlotsResponse).toStrictEqual([])
      expect(slotsDashBoardStore.upComingSlotsCurrentDate).toStrictEqual('')
      expect(slotsDashBoardStore.upComingSlotsDetails).toStrictEqual({})
      expect(slotsDashBoardStore.upComingSlotsDates).toStrictEqual([])
   })

   it('should test fetching Availableslots', () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {})
      const mockdashBoardServiceAPI = jest.fn()

      mockdashBoardServiceAPI.mockReturnValue(mockLoadingPromise)
      dashBoardServiceAPI.availableSlotsResponseAPI = mockdashBoardServiceAPI

      slotsDashBoardStore.getAvailableSlotsData()
      expect(slotsDashBoardStore.getAvailableSlotsResponseStatus).toBe(
         API_FETCHING
      )
   })

   it('should test getAvailableSlotsData success state', async() => {
      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(getSlotsResponse)
      })

      const mockdashBoardServiceAPI = jest.fn()
      mockdashBoardServiceAPI.mockReturnValue(mockSuccessPromise)
      dashBoardServiceAPI.availableSlotsResponseAPI = mockdashBoardServiceAPI

      await slotsDashBoardStore.getAvailableSlotsData()
      expect(slotsDashBoardStore.getAvailableSlotsResponseStatus).toBe(
         API_SUCCESS
      )
   })

   it('should test getAvailableSlotsData failure state', async() => {
      const mockFailurePromise = new Promise((resolve, reject) => {
         reject(new Error('failure'))
      })

      const mockdashBoardServiceAPI = jest.fn()
      mockdashBoardServiceAPI.mockReturnValue(mockFailurePromise)
      dashBoardServiceAPI.availableSlotsResponseAPI = mockdashBoardServiceAPI

      await slotsDashBoardStore.getAvailableSlotsData()
      expect(slotsDashBoardStore.getAvailableSlotsResponseStatus).toBe(
         API_FAILED
      )
      expect(slotsDashBoardStore.getAvailableSlotsResponseError).toBe('failure')
   })

   it('should test fetching UpComingslots', () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {})
      const mockdashBoardServiceAPI = jest.fn()

      mockdashBoardServiceAPI.mockReturnValue(mockLoadingPromise)
      dashBoardServiceAPI.upcomingSlotsResponseAPI = mockdashBoardServiceAPI

      slotsDashBoardStore.getUpcomingSlotsData()
      expect(slotsDashBoardStore.getUpcomingSlotsResponseStatus).toBe(
         API_FETCHING
      )
   })

   it('should test UpComingSlotsData success state', async() => {
      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(getSlotsResponse)
      })

      const mockdashBoardServiceAPI = jest.fn()
      mockdashBoardServiceAPI.mockReturnValue(mockSuccessPromise)
      dashBoardServiceAPI.upcomingSlotsResponseAPI = mockdashBoardServiceAPI

      await slotsDashBoardStore.getUpcomingSlotsData()
      expect(slotsDashBoardStore.getUpcomingSlotsResponseStatus).toBe(
         API_SUCCESS
      )
   })

   it('should test upComingData failure state', async() => {
      const mockFailurePromise = new Promise((resolve, reject) => {
         reject(new Error('failure'))
      })

      const mockdashBoardServiceAPI = jest.fn()
      mockdashBoardServiceAPI.mockReturnValue(mockFailurePromise)
      dashBoardServiceAPI.upcomingSlotsResponseAPI = mockdashBoardServiceAPI

      await slotsDashBoardStore.getUpcomingSlotsData()
      expect(slotsDashBoardStore.getUpcomingSlotsResponseStatus).toBe(
         API_FAILED
      )
      expect(slotsDashBoardStore.getUpcomingSlotsResponseError).toBe('failure')
   })

   it('should test fetching Previousslots', () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {})
      const mockdashBoardServiceAPI = jest.fn()

      mockdashBoardServiceAPI.mockReturnValue(mockLoadingPromise)
      dashBoardServiceAPI.previousSlotsResponseAPI = mockdashBoardServiceAPI

      slotsDashBoardStore.getPreviousSlotsData()
      expect(slotsDashBoardStore.getPreviousSlotsResponseStatus).toBe(
         API_FETCHING
      )
   })

   it('should test PreviousSlotsData success state', async() => {
      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(getSlotsResponse)
      })

      const mockdashBoardServiceAPI = jest.fn()
      mockdashBoardServiceAPI.mockReturnValue(mockSuccessPromise)
      dashBoardServiceAPI.previousSlotsResponseAPI = mockdashBoardServiceAPI

      await slotsDashBoardStore.getPreviousSlotsData()
      expect(slotsDashBoardStore.getPreviousSlotsResponseStatus).toBe(
         API_SUCCESS
      )
   })

   it('should test PreviousData failure state', async() => {
      const mockFailurePromise = new Promise((resolve, reject) => {
         reject(new Error('failure'))
      })

      const mockdashBoardServiceAPI = jest.fn()
      mockdashBoardServiceAPI.mockReturnValue(mockFailurePromise)
      dashBoardServiceAPI.previousSlotsResponseAPI = mockdashBoardServiceAPI

      await slotsDashBoardStore.getPreviousSlotsData()
      expect(slotsDashBoardStore.getPreviousSlotsResponseStatus).toBe(
         API_FAILED
      )
      expect(slotsDashBoardStore.getPreviousSlotsResponseError).toBe('failure')
   })

   it('should test onClickDateAvailableSlots', () => {
      const date = '25-05-2020'

      slotsDashBoardStore.availableSlotsResponse = getSlotsResponse.available_slots.map(
         obj => new AvailableSlotsModel(obj)
      )
      slotsDashBoardStore.onClickDateAvailableSlots(date)

      expect(slotsDashBoardStore.currentDate).toBe(date)
      expect(slotsDashBoardStore.availableSlotsTimings.length).toBeDefined
   })

   it('should test onClickTime Availble slots', () => {
      const time = '05:00 AM-06:00 AM'
      const currentDateValue = '28-05-2020'

      slotsDashBoardStore.currentDate = currentDateValue

      const bookedDateAndTimeSlot = {
         date: currentDateValue,
         start_time: '05:00 AM',
         end_time: '06:00 AM'
      }

      slotsDashBoardStore.onClickTime(time)
      expect(slotsDashBoardStore.bookedDateAndTime).toEqual(
         bookedDateAndTimeSlot
      )
   })

   it('should test onClickConfirm availableSlots withOutSelecting time', () => {
      window.alert = jest.fn()
      slotsDashBoardStore.bookedDateAndTime = {}
      slotsDashBoardStore.onClickConfirm()
      expect(window.alert.mock.calls.length).toBe(1)
   })

   it('should test onClickConfirm availableSlots withSelecting time onSuccess', async() => {
      slotsDashBoardStore.bookedDateAndTime = {
         date: '28-05-2020',
         start_time: '05:00 AM',
         end_time: '06:00 AM'
      }

      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(getSlotsResponse)
      })

      const mockdashBoardServiceAPI = jest.fn()
      mockdashBoardServiceAPI.mockReturnValue(mockSuccessPromise)
      dashBoardServiceAPI.postBookedSlot = mockdashBoardServiceAPI

      await slotsDashBoardStore.onClickConfirm()
      expect(slotsDashBoardStore.getConfirmSlotStatus).toBe(API_SUCCESS)
   })

   it('should test onClickConfirm availableSlots withSelecting time onFailure', async() => {
      slotsDashBoardStore.bookedDateAndTime = {
         date: '28-05-2020',
         start_time: '05:00 AM',
         end_time: '06:00 AM'
      }

      const mockFailurePromise = new Promise((resolve, reject) => {
         reject(new Error('failure'))
      })

      const mockdashBoardServiceAPI = jest.fn()
      mockdashBoardServiceAPI.mockReturnValue(mockFailurePromise)
      dashBoardServiceAPI.postBookedSlot = mockdashBoardServiceAPI

      await slotsDashBoardStore.onClickConfirm()
      expect(slotsDashBoardStore.getConfirmSlotStatus).toBe(API_FAILED)
      expect(slotsDashBoardStore.getConfirmSlotError).toBe('failure')
   })

   it('should test onClickDateUpComingSlots', () => {
      const date = '25-05-2020'

      slotsDashBoardStore.upcomingSlotsResponse = getSlotsResponse.upcoming_slots.map(
         obj => new UpComingSlotDetails(obj)
      )
      slotsDashBoardStore.onClickDateUpComingSlots(date)

      expect(slotsDashBoardStore.upComingSlotsCurrentDate).toBe(date)
      expect(slotsDashBoardStore.upComingSlotsDetails).toBeDefined
   })

   it('should test onClickCancelSlot success state', async() => {
      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(getSlotsResponse)
      })

      const mockdashBoardServiceAPI = jest.fn()
      mockdashBoardServiceAPI.mockReturnValue(mockSuccessPromise)
      dashBoardServiceAPI.postCancelSlot = mockdashBoardServiceAPI

      await slotsDashBoardStore.onClickCancelSlot()
      expect(slotsDashBoardStore.getCancelSlotStatus).toBe(API_SUCCESS)
   })

   it('should test onClickCancelSlot failure state', async() => {
      const mockFailurePromise = new Promise((resolve, reject) => {
         reject(new Error('failure'))
      })

      const mockdashBoardServiceAPI = jest.fn()
      mockdashBoardServiceAPI.mockReturnValue(mockFailurePromise)
      dashBoardServiceAPI.postCancelSlot = mockdashBoardServiceAPI

      await slotsDashBoardStore.onClickCancelSlot()
      expect(slotsDashBoardStore.getCancelSlotStatus).toBe(API_FAILED)
      expect(slotsDashBoardStore.getCancelSlotError).toBe('failure')
   })

   it('should test countOfBookingSlotsPerDay', () => {
      slotsDashBoardStore.availableSlotsTimings = [
         ...getSlotsResponse.available_slots[0].time_slots
      ]

      expect(slotsDashBoardStore.countOfBookingSlotsPerDay).toBe(10)
   });
})
