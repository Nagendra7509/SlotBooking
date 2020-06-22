import React from 'react'

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import SideNavBar from '.'
describe('SideNavBar tests', () => {
   it('should test SideNavBar content', () => {
      const { getByText } = render(<SideNavBar />)

      getByText('ISSUES')
      getByText('WASHING MACHINE')
      getByText('SETTINGS')
   })
})
