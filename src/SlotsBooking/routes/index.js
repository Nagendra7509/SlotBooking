import React from 'react'
import { Route } from 'react-router-dom'
import {
   SLOTS_BOOKING_PATH,
   REQUEST_PAGE_PATH,
   REPORTANISSUE_PAGE_PATH,
   PREVIOUS_SLOTS_PAGE_PATH,
   PROFILE_PAGE
}
from '../constants/routeConstants/RouteConstants'
import { ProtectedRoute } from '../../Common/ProtectedRoute'
import SlotsBookingRoute from './SlotsBookingRoute'
import Requests from '../components/SlotsBookingHomePage/RequestsPage'
import ReportAnIssue from '../components/SlotsBookingHomePage/ReportAnIssuePage'
import PreviousSlots from '../components/SlotsBookingHomePage/PreviousSlotsPage'
import Profile from '../components/SlotsBookingHomePage/Profile'

export const slotsBookingRoute = [
   <ProtectedRoute
      key={Math.random()}
      path={SLOTS_BOOKING_PATH}
      component={SlotsBookingRoute}
   />,
   <ProtectedRoute
      key={Math.random()}
      path={REQUEST_PAGE_PATH}
      component={Requests}
   />,
   <ProtectedRoute
      key={Math.random()}
      path={REPORTANISSUE_PAGE_PATH}
      component={ReportAnIssue}
   />,
   <ProtectedRoute
      key={Math.random()}
      path={PREVIOUS_SLOTS_PAGE_PATH}
      component={PreviousSlots}
   />,
   <ProtectedRoute
      key={Math.random()}
      path={PROFILE_PAGE}
      component={Profile}
   />
]
