import React from 'react'

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import adminResponse from '../../fixtures/getAdminResponse.json'

import AdminService from './index.fixture'
describe('AdminService tests', () => {
   let adminFixtureService

   beforeEach(() => {
      adminFixtureService = new AdminService()
   })

   it('should test adminResponse content', async () => {
      expect(await adminFixtureService.adminResponse()).toBeDefined
   })

   it('should test getUpdateWashingMachineSlotsDetails content', async () => {
      expect(await adminFixtureService.getUpdateWashingMachineSlotsDetails())
         .toBeDefined
   })

   it('should test postStatusToChange content', async () => {
      expect(await adminFixtureService.postStatusToChange()).toBeDefined
   })

   it('should test postNewWashingMachineIdToAdd content', async () => {
      expect(await adminFixtureService.postNewWashingMachineIdToAdd())
         .toBeDefined
   })

   it('should test postUpdateSlotsDetails content', async () => {
      expect(await adminFixtureService.postUpdateSlotsDetails()).toBeDefined
   })
})
