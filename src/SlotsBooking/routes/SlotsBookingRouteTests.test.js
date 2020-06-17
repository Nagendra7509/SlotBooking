import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'mobx-react'
import SlotsBookingRoute from './SlotsBookingRoute'
import SlotsDashBoardStore from '../../SlotsDashBoard/stores/SlotsDashBoardStore'
import DashBoardService from '../../SlotsDashBoard/services/DashBoardService/index.api'
import SlotsBookingHomePage from '../components/SlotsBookingHomePage'
import getResponse from '../../SlotsDashBoard/fixtures/getResponse.json'
import AvailableSlotsModel from '../../SlotsDashBoard/stores/models/AvailableSlotsModel'

describe('SlotsBooking Component Test cases', () => {
   let slotsDashBoardStore, dashBoardService

   beforeEach(() => {
      dashBoardService = new DashBoardService()
      slotsDashBoardStore = new SlotsDashBoardStore(dashBoardService)
   })

   it('should test SlotsBooking NavItems', () => {
      const { debug, getByText } = render(
         <Provider slotsDashBoardStore={slotsDashBoardStore}>
            <SlotsBookingRoute />
         </Provider>
      )
      //debug();
      getByText('Home')
      getByText('Requests')
      getByText('Report an Issue')
      getByText('Previous Slots')
      getByText('Profile')
      getByText('Number of slots missed:0')
      getByText('Available Slots')
      getByText('Upcoming Slots')
   })
})
