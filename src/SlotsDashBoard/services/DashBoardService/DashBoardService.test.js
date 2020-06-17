import React from 'react'

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
///import adminResponse from "../../fixtures/getAdminResponse";

import DashBoardService from './index.fixture'
describe('DashBoardService tests', () => {
   let dashBoardService

   beforeEach(() => {
      dashBoardService = new DashBoardService()
   })

   it('should test availableSlotsResponseAPI content', async () => {
      expect(await dashBoardService.availableSlotsResponseAPI()).toBeDefined
   })

   it('should test upcomingSlotsResponseAPI content', async () => {
      expect(await dashBoardService.upcomingSlotsResponseAPI()).toBeDefined
   })

   it('should test previousSlotsResponseAPI content', async () => {
      expect(await dashBoardService.previousSlotsResponseAPI()).toBeDefined
   })

   it('should test postBookedSlot content', async () => {
      expect(await dashBoardService.postBookedSlot()).toBeDefined
   })

   it('should test postCancelSlot content', async () => {
      expect(await dashBoardService.postCancelSlot()).toBeDefined
   })
})
