import React from 'react'
import AdminStore from '../../stores/AdminStore'
import AdminService from '../../services/AdminServices/index.api'
import getAdminResponse from '../../fixtures/getAdminResponse'

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'mobx-react'
import WashingMachineInactive from '.'
describe('WashingMachineInactive tests', () => {
   let adminStore, adminService

   beforeEach(() => {
      adminService = new AdminService()
      adminStore = new AdminStore(adminService)
   })

   it('should test UpdateWashingSlotsDetails content', () => {
      adminStore.setAdminAPIResponse(getAdminResponse)

      const { getByText, debug, queryAllByText } = render(
         <Provider adminStore={adminStore}>
            <WashingMachineInactive
               inActiveWashingMachines={adminStore.inActiveWashingMachines}
            />
         </Provider>
      )

      getByText('ISSUES')
      getByText('WASHING MACHINE')
      getByText('SETTINGS')
      getByText('Profile')
      getByText('ACTIVE')
      getByText('INACTIVE')
      getByText('+ Add New Machine')

      //getByText("Washing Machine ID :02");
      queryAllByText('Update Slots')
      queryAllByText('Allocated Slots')
      queryAllByText('Mark As Active')

      // debug();
   })
})
