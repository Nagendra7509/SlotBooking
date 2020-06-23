import React from 'react'
import AdminStore from '../../stores/AdminStore'
import AdminService from '../../services/AdminServices/index.api'
import getAdminResponse from '../../fixtures/getAdminResponse.json'

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'mobx-react'
import WashingMachineActive from '.'
describe('WashingMachineActive tests', () => {
   let adminStore, adminService

   beforeEach(() => {
      adminService = new AdminService()
      adminStore = new AdminStore(adminService)
   })

   it('should test UpdateWashingSlotsDetails content', () => {
      adminStore.setAdminAPIResponse(getAdminResponse)

      const {
         getByText,
         debug,
         queryAllByText,
         getByRole,
         getAllByText
      } = render(
         <Provider adminStore={adminStore}>
            <WashingMachineActive
               activeWashingMachines={adminStore.activeWashingMachines}
            />
         </Provider>
      )

      getByText('ISSUES')
      getByText('WASHING MACHINE')
      getByText('SETTINGS')
      getByText('Profile')
      getByText('ACTIVE')
      getByText('INACTIVE')
      const updateField = getAllByText('Update Slots')
      const allocatedField = getAllByText('Allocated Slots')

      fireEvent.change(updateField[0])
      fireEvent.change(allocatedField[0])
      const markAsActive = getAllByText('Mark As Inactive')

      fireEvent.click(markAsActive[0])
      const addMachineBtnField = getByRole('button', {
         name: '+ Add New Machine'
      })
      fireEvent.click(addMachineBtnField)
      // debug();
   })
})
