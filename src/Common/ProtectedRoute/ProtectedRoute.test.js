import React from 'react'

import { withRouter, Router, Route } from 'react-router-dom'
import { render } from '@testing-library/react'
import { ProtectedRoute } from '.'
import SlotsBookingRoute from '../../SlotsBooking/routes/SlotsBookingRoute'

describe('ProtectedRoute tests', () => {
   it('should test protected route', () => {
      const { getByText, debug } = render(
         <ProtectedRoute
            path={'/slot-booking/dashBoard/'}
            component={SlotsBookingRoute}
         />
      )

      debug()
   })
})
