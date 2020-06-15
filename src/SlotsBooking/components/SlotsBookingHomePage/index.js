import React from 'react'
import { observer } from 'mobx-react'
import SlotBookingDashBoard from '../../../SlotsDashBoard/components/DashBoard'
import NavigationBar from '../../common/components/NavigationBar'
import { SLOTS_BOOKING_PATH } from '../../constants/routeConstants/RouteConstants'
import { SlotsBookingHomePageContainer } from './styledComponent'

@observer
class SlotsBookingHomePage extends React.Component {
   render() {
      return (
         <SlotsBookingHomePageContainer>
            <NavigationBar pathName={SLOTS_BOOKING_PATH} />
            <SlotBookingDashBoard />
         </SlotsBookingHomePageContainer>
      )
   }
}

export default SlotsBookingHomePage
