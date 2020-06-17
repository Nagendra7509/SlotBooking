import React from 'react'

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'mobx-react'
import ReportAnIssue from '.'
describe('ReportAnIssue tests', () => {
   it('should test ReportAnIssue content', async () => {
      const { getByText, debug, getByRole } = render(<ReportAnIssue />)
      //debug();

      getByText('Home')
      getByText('Requests')
      getByText('Report an Issue')
      getByText('Previous Slots')
      getByText('Profile')
      getByText('Number of slots missed:0')
      getByText('Report Issue')
      getByText('DESCRIPTION')
      getByRole('button', { name: 'REPORT' })
   })
})
