import React from 'react'

import DashBoard from '.'

import { render, fireEvent, waitFor } from '@testing-library/react'
import { Provider } from 'mobx-react'

import DashBoardService from '../../services/DashBoardService/index.api'
import SlotsDashBoardStore from '../../stores/SlotsDashBoardStore'
import SlotsResponse from '../../fixtures/getResponse.json'
import AvailableSlotsModel from '../../stores/models/AvailableSlotsModel'
import UpComingSlotDetails from '../../stores/models/UpComingSlotDetails'
import emptyResponse from '../../fixtures/emptyResponse.json'

describe('DashBoard tets', () => {
   let dashBoardService, slotsDashBoardStore

   beforeEach(() => {
      dashBoardService = new DashBoardService()
      slotsDashBoardStore = new SlotsDashBoardStore(dashBoardService)
   })

   it('should test DashBoard', async () => {
      const mockSuccessPromise = new Promise((resolve, reject) => {
         resolve(SlotsResponse)
      })

      const mockdashBoardServiceAPI = jest.fn()
      mockdashBoardServiceAPI.mockReturnValue(mockSuccessPromise)
      dashBoardService.availableSlotsResponseAPI = mockdashBoardServiceAPI

      dashBoardService.upcomingSlotsResponseAPI = mockdashBoardServiceAPI

      const { debug, getByText, getByRole } = render(
         <Provider slotsDashBoardStore={slotsDashBoardStore}>
            <DashBoard />
         </Provider>
      )

      await waitFor(() => {
         getByText('Available Slots')
         getByText('Selected')
         getByText('Booked')
         getByText('Available')
         getByText('Time Slot :10:00 AM - 11:00 AM')
         getByText('Washing Machine ID : 7')
         const cancelBtnField = getByRole('button', { name: 'Cancel' })
         fireEvent.click(cancelBtnField)
         const dateFieldInUpComingSlot = getByRole('button', {
            name: '01-06-2020'
         })
         fireEvent.click(dateFieldInUpComingSlot)
         const dateFieldInAvailableSlots = getByRole('button', {
            name: '28-05-2020'
         })
         fireEvent.click(dateFieldInAvailableSlots)
         const timeBtnField = getByRole('button', {
            name: '05:00 AM - 06:00 AM'
         })
         fireEvent.click(timeBtnField)
         const confirmBtnField = getByRole('button', { name: 'Confirm' })
         fireEvent.click(confirmBtnField)
      })
   })

   it('should test upComing No booking yet Field', () => {
      slotsDashBoardStore.upComingSlotsDetails = undefined
      const { debug, getByText, getByRole } = render(
         <Provider slotsDashBoardStore={slotsDashBoardStore}>
            <DashBoard />
         </Provider>
      )

      waitFor(() => {
         getByText('No bookings yet')
      })
   })

   // it('should test AvailableSlots No Data Found yet Field', () => {

   //     const mockSuccessPromise = new Promise((resolve, reject) => {
   //         resolve(emptyResponse)
   //     })

   //     const mockdashBoardServiceAPI = jest.fn()
   //     mockdashBoardServiceAPI.mockReturnValue(mockSuccessPromise)
   //     dashBoardService.availableSlotsResponseAPI = mockdashBoardServiceAPI
   //     //slotsDashBoardStore.getAvailableSlotsResponseStatus = 200;

   //     const { debug, getByText, getByRole } = render(<Provider slotsDashBoardStore={slotsDashBoardStore}>
   //                             <DashBoard/>
   //                         </Provider>);

   //     waitFor(() => {
   //         debug();
   //         console.log(slotsDashBoardStore.getAvailableSlotsResponseStatus, "status--")
   //     });
   // })
})
