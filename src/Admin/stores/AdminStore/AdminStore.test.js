import React from 'react'
import {
   API_FAILED,
   API_FETCHING,
   API_SUCCESS,
   API_INITIAL
} from '@ib/api-constants'
import AdminStore from '.'
import AdminServices from '../../services/AdminServices/index.api'
import adminResponse from '../../fixtures/getAdminResponse.json'
import updateSlotsResponseData from '../../fixtures/getUpdateSlotsResponse.json'
import AdminModel from '../models/AdminModel'
import UpdateSlotsModel from '../models/UpdateSlotsModel'

/*global jest*/
/*global expect*/

describe('adminStore Tests', () => {
   let adminStore, adminServiceAPI

   beforeEach(() => {
      adminServiceAPI = new AdminServices()
      adminStore = new AdminStore(adminServiceAPI)
   })

   it('should initialising adminStore', () => {
      expect(adminStore.getAdminResponseStatus).toBe(API_INITIAL)
      expect(adminStore.getAdminResponseError).toBe(null)
      expect(adminStore.getUpdateSlotsResponseStatus).toBe(API_INITIAL)
      expect(adminStore.getUpdateSlotsResponseError).toBe(null)
      expect(adminStore.getPostStatusOfWashingMachineResponseStatus).toBe(
         API_INITIAL
      )
      expect(adminStore.getPostStatusOfWashingMachineResponseError).toBe(null)
      expect(adminStore.getPostNewWashingMachineIdStatus).toBe(API_INITIAL)
      expect(adminStore.getPostNewWashingMachineIdError).toBe(null)
      expect(adminStore.getPostUpdateSlotsStatus).toBe(API_INITIAL)
      expect(adminStore.getPostUpdateSlotsError).toBe(null)

      expect(adminStore.adminResponse).toStrictEqual([])
      expect(adminStore.updateSlotsResponse).toStrictEqual([])
      expect(adminStore.activeWashingMachines).toStrictEqual([])
      expect(adminStore.inActiveWashingMachines).toStrictEqual([])
   })

   it('should test fetching get Admin Response', () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {})

      const mockAdminServiceAPI = jest.fn()
      mockAdminServiceAPI.mockReturnValue(mockLoadingPromise)
      adminServiceAPI.adminResponse = mockAdminServiceAPI

      adminStore.getAdminResponse()
      expect(adminStore.getAdminResponseStatus).toBe(API_FETCHING)
   })

   it('should test  get Admin Response success state', async () => {
      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(adminResponse)
      })

      const mockAdminServiceAPI = jest.fn()
      mockAdminServiceAPI.mockReturnValue(mockSuccessPromise)
      adminServiceAPI.adminResponse = mockAdminServiceAPI

      await adminStore.getAdminResponse()
      expect(adminStore.getAdminResponseStatus).toBe(API_SUCCESS)
      expect(adminStore.adminResponse).toBeDefined
      expect(adminStore.activeWashingMachines).toBeDefined
      expect(adminStore.inActiveWashingMachines).toBeDefined
   })

   it('should test  get Admin Response failure state', async () => {
      const mockFailurePromise = new Promise((resolve, reject) => {
         reject(new Error('failure'))
      })

      const mockAdminServiceAPI = jest.fn()
      mockAdminServiceAPI.mockReturnValue(mockFailurePromise)
      adminServiceAPI.adminResponse = mockAdminServiceAPI

      await adminStore.getAdminResponse()
      expect(adminStore.getAdminResponseStatus).toBe(API_FAILED)
   })

   it('should test onClickNewWashingMachine if Details are exist ', () => {
      window.alert = jest.fn()
      adminStore.adminResponse = adminResponse.washing_machines.map(
         obj => new AdminModel(obj)
      )
      adminStore.onClickNewWashingMachine('01')
      expect(window.alert).toHaveBeenCalledWith(
         'Already Exists Enter another number'
      )
   })

   it('should test onClickNewWashingMachine if enter nothing', () => {
      window.alert = jest.fn()
      adminStore.adminResponse = adminResponse.washing_machines.map(
         obj => new AdminModel(obj)
      )
      adminStore.onClickNewWashingMachine('')
      expect(window.alert).toHaveBeenCalledWith(
         'please enter washing machine number'
      )
   })

   it('should test onClickNewWashingMachine with valid details fetching state', () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {})

      const mockAdminServiceAPI = jest.fn()
      mockAdminServiceAPI.mockReturnValue(mockLoadingPromise)
      adminServiceAPI.postNewWashingMachineIdToAdd = mockAdminServiceAPI

      adminStore.onClickNewWashingMachine('100')
      expect(adminStore.getPostNewWashingMachineIdStatus).toBe(API_FETCHING)
   })

   it('should test onClickNewWashingMachine with valid details success state', async () => {
      //window.alert = jest.fn();

      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(200)
      })

      const mockAdminServiceAPI = jest.fn()
      mockAdminServiceAPI.mockReturnValue(mockSuccessPromise)
      adminServiceAPI.postNewWashingMachineIdToAdd = mockAdminServiceAPI

      await adminStore.onClickNewWashingMachine('100')
      expect(adminStore.getPostNewWashingMachineIdStatus).toBe(API_SUCCESS)

      //expect(window.alert).toHaveBeenCalledWith('successfully added new Machine');
   })

   // it('should test onClickNewWashingMachine with valid details failure state', async () => {
   //    // window.alert = jest.fn();

   //    const mockFailurePromise = new Promise((resolve, reject) => {
   //       reject(new Error('failure'))
   //    })

   //    const mockAdminServiceAPI = jest.fn()
   //    mockAdminServiceAPI.mockReturnValue(mockFailurePromise)
   //    adminServiceAPI.postNewWashingMachineIdToAdd = mockAdminServiceAPI

   //    //adminStore.adminResponse = adminResponse.washing_machines.map(obj => new AdminModel(obj));
   //    await adminStore.onClickNewWashingMachine('100')
   //    expect(adminStore.getPostNewWashingMachineIdStatus).toBe(API_FAILED)
   //    expect(adminStore.getPostNewWashingMachineIdError).toBe('failure')

   //    //expect(window.alert).toHaveBeenCalledWith('new washing machine is not added');
   // })

   it('should test onClickUpdateInWashingMachineCard fetching state', () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {})

      const mockAdminServiceAPI = jest.fn()
      mockAdminServiceAPI.mockReturnValue(mockLoadingPromise)
      adminServiceAPI.getUpdateWashingMachineSlotsDetails = mockAdminServiceAPI

      adminStore.adminResponse = adminResponse.washing_machines.map(
         obj => new AdminModel(obj)
      )
      adminStore.onClickUpdateInWashingMachineCard('02')
      expect(adminStore.getUpdateSlotsResponseStatus).toBe(API_FETCHING)
   })

   it('should test onClickUpdateInWashingMachineCard success state', async () => {
      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(updateSlotsResponseData)
      })

      const mockAdminServiceAPI = jest.fn()
      mockAdminServiceAPI.mockReturnValue(mockSuccessPromise)
      adminServiceAPI.getUpdateWashingMachineSlotsDetails = mockAdminServiceAPI

      adminStore.adminResponse = adminResponse.washing_machines.map(
         obj => new AdminModel(obj)
      )
      await adminStore.onClickUpdateInWashingMachineCard('02')
      expect(adminStore.getUpdateSlotsResponseStatus).toBe(API_SUCCESS)
   })

   it('should test onClickUpdateInWashingMachineCard failure state', async () => {
      const mockFailurePromise = new Promise((resolve, reject) => {
         reject(new Error('failure'))
      })

      const mockAdminServiceAPI = jest.fn()
      mockAdminServiceAPI.mockReturnValue(mockFailurePromise)
      adminServiceAPI.getUpdateWashingMachineSlotsDetails = mockAdminServiceAPI

      adminStore.adminResponse = adminResponse.washing_machines.map(
         obj => new AdminModel(obj)
      )
      await adminStore.onClickUpdateInWashingMachineCard('02')
      expect(adminStore.getUpdateSlotsResponseStatus).toBe(API_FAILED)
      expect(adminStore.getUpdateSlotsResponseError).toBe('failure')
   })

   it('should test onClickActiveOrInactiveStatus fetching state', () => {
      const mockLoadingPromise = new Promise((resolve, reject) => {})

      const mockAdminServiceAPI = jest.fn()
      mockAdminServiceAPI.mockReturnValue(mockLoadingPromise)
      adminServiceAPI.postStatusToChange = mockAdminServiceAPI

      adminStore.onClickActiveOrInactiveStatus('02')
      expect(adminStore.getPostStatusOfWashingMachineResponseStatus).toBe(
         API_FETCHING
      )
   })

   it('should test onClickActiveOrInactiveStatus success state', async () => {
      //window.alert = jest.fn();

      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(200)
      })

      const mockAdminServiceAPI = jest.fn()
      mockAdminServiceAPI.mockReturnValue(mockSuccessPromise)
      adminServiceAPI.postStatusToChange = mockAdminServiceAPI

      await adminStore.onClickActiveOrInactiveStatus('02')
      expect(adminStore.getPostStatusOfWashingMachineResponseStatus).toBe(
         API_SUCCESS
      )
      //expect(window.alert).toHaveBeenCalledWith('success');
   })

   it('should test onClickActiveOrInactiveStatus failure state', async () => {
      // window.alert = jest.fn();

      const mockFailurePromise = new Promise((resolve, reject) => {
         reject(new Error('failure'))
      })

      const mockAdminServiceAPI = jest.fn()
      mockAdminServiceAPI.mockReturnValue(mockFailurePromise)
      adminServiceAPI.postStatusToChange = mockAdminServiceAPI

      await adminStore.onClickActiveOrInactiveStatus('02')
      expect(adminStore.getPostStatusOfWashingMachineResponseStatus).toBe(
         API_FAILED
      )
      expect(adminStore.getPostStatusOfWashingMachineResponseError).toBe(
         'failure'
      )
      // expect(window.alert).toHaveBeenCalledWith('failed status not updated');
   })

   it('should test onClickCloseBtn in updateDateSlots', () => {
      adminStore.updateSlotsResponse = new UpdateSlotsModel(
         updateSlotsResponseData
      )

      adminStore.onClickCloseBtn()
      expect(adminStore.updateSlotsResponse).toBeDefined
   })

   // it('should test onClickAddNewSlot', () => {

   //     let startTime = "10:30 AM",
   //         endTime = "11:30 AM";

   //     const newSlot = { "start_time": "10:30 AM", "end_time": "11:30 PM" };
   //     adminStore.updateSlotsResponse = (new UpdateSlotsModel(updateSlotsResponseData));
   //     const lengthOfUpdateSlotsResponse = adminStore.updateSlotsResponse.length;

   //     adminStore.onClickAddNewSlot();
   //     expect(adminStore.updateSlotsResponse.length).toBe(lengthOfUpdateSlotsResponse + 1);
   // });

   it('should test onChangeStartTimeInUpdateSlots', () => {
      adminStore.updateSlotsResponse = new UpdateSlotsModel(
         updateSlotsResponseData
      )
      adminStore.onChangeStartTimeInUpdateSlots()
      expect(adminStore.updateSlotsResponse.timeSlots).toBeDefined
   })

   it('should test onChangeEndTimeInUpdateSlots', () => {
      adminStore.updateSlotsResponse = new UpdateSlotsModel(
         updateSlotsResponseData
      )
      adminStore.onChangeEndTimeInUpdateSlots(0.9619404981906519)
      expect(adminStore.updateSlotsResponse.timeSlots).toBeDefined
   })

   it('should test onClickUpdateBtn fetching state', () => {
      adminStore.updateSlotsResponse = new UpdateSlotsModel(
         updateSlotsResponseData
      )

      const mockLoadingPromise = new Promise((resolve, reject) => {})

      const mockAdminServiceAPI = jest.fn()
      mockAdminServiceAPI.mockReturnValue(mockLoadingPromise)
      adminServiceAPI.postUpdateSlotsDetails = mockAdminServiceAPI

      adminStore.onClickUpdateBtn()
      expect(adminStore.getPostUpdateSlotsStatus).toBe(API_FETCHING)
   })

   it('should test onClickUpdateBtn success state', async () => {
      //window.alert = jest.fn();
      adminStore.updateSlotsResponse = new UpdateSlotsModel(
         updateSlotsResponseData
      )

      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(200)
      })

      const mockAdminServiceAPI = jest.fn()
      mockAdminServiceAPI.mockReturnValue(mockSuccessPromise)
      adminServiceAPI.postUpdateSlotsDetails = mockAdminServiceAPI

      await adminStore.onClickUpdateBtn()
      expect(adminStore.getPostUpdateSlotsStatus).toBe(API_SUCCESS)
      //expect(window.alert).toHaveBeenCalledWith('successfully updated');
   })

   // it('should test onClickUpdateBtn failure state', async() => {
   //    window.alert = jest.fn()
   //    adminStore.adminResponse = adminResponse.washing_machines.map(
   //       obj => new AdminModel(obj)
   //    )
   //    adminStore.updateSlotsResponse = new UpdateSlotsModel(
   //       updateSlotsResponseData
   //    )

   //    const mockFailurePromise = new Promise((resolve, reject) => {
   //       reject(new Error('failure'))
   //    })

   //    const mockAdminServiceAPI = jest.fn()
   //    mockAdminServiceAPI.mockReturnValue(mockFailurePromise)
   //    adminServiceAPI.postUpdateSlotsDetails = mockAdminServiceAPI

   //    await adminStore.onClickUpdateBtn()
   //    expect(adminStore.getPostUpdateSlotsStatus).toBe(API_FAILED)
   //    expect(adminStore.getPostUpdateSlotsError).toBe('failure')
   //    expect(window.alert).toHaveBeenCalledWith('data not updated')
   // })
})
