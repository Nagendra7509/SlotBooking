import React from 'react'
import AdminStore from '../../stores/AdminStore'
import AdminService from '../../services/AdminServices/index.api'

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'mobx-react'
import UpdateWashingSlotsDetails from '.'
import getUpdateSlotsData from '../../fixtures/getUpdateSlotsResponse.json'
import getAdminResponse from '../../fixtures/getAdminResponse.json'
describe('UpdateWashingSlotsDetails tests', () => {
   let adminStore, adminService

   beforeEach(() => {
      adminService = new AdminService()
      adminStore = new AdminStore(adminService)
   })

   //adminStore.setUpdateWashingMachineAPIResponse(getUpdateSlotsData);

   it('should test UpdateWashingSlotsDetails content', async () => {
      await adminStore.setUpdateWashingMachineAPIResponse(getUpdateSlotsData)
      await adminStore.setAdminAPIResponse(getAdminResponse)

      const { getByText, debug, getByRole } = render(
         <Provider adminStore={adminStore}>
            <UpdateWashingSlotsDetails />
         </Provider>
      )

      getByText('ISSUES')
      getByText('WASHING MACHINE')
      getByText('SETTINGS')
      getByText('Profile')
      getByText('Washing Machine ID : 01')
      const addSlotField = getByRole('button', { name: '+ Add Slots' })
      const updateButtonField = getByRole('button', { name: 'Update' })
      //fireEvent.click(addSlotField);
      //fireEvent.click(updateButtonField);
      //debug();
   })
})
