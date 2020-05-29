import React from "react";
import { Route } from 'react-router-dom';

import { SLOTS_BOOKING_PATH } from "../constants/routeConstants/RouteConstants";
import SlotsBookingRoute from "./SlotsBookingRoute";

import { ProtectedRoute } from "../../Common/ProtectedRoute";

export const slotsBookingRoute = (
    <ProtectedRoute path={SLOTS_BOOKING_PATH} component={SlotsBookingRoute}/>

);

//<Route path={SLOTS_BOOKING_PATH} component={SlotsBookingRoute} />
