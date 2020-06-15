import React from 'react'
import { observer, inject } from 'mobx-react'
import SlotsBookingHomePage from '../components/SlotsBookingHomePage'

@observer
class SlotsBookingRoute extends React.Component {
   render() {
      return <SlotsBookingHomePage />
   }
}

export default SlotsBookingRoute
