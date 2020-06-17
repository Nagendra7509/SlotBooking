import React from 'react'

/*global jest*/
/*global expect*/

import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'mobx-react'
import Profile from '.'
describe('Profile tests', () => {
   it('should test Profile content', async () => {
      const { getByText, debug, getByRole } = render(<Profile />)
      //debug();

      getByText('Home')
      getByText('Requests')
      getByText('Report an Issue')
      getByText('Previous Slots')
      getByText('Profile')
      getByText('Number of slots missed:0')
      getByRole('button', { name: 'Logout' })
   })
})
