import React from "react";
import { SLOTS_BOOKING_PATH } from "../constants/routeConstants/RouteConstants";
import { ProtectedRoute } from "../../Common/ProtectedRoute";
import SlotsBookingRoute from "./SlotsBookingRoute";


export const slotsBookingRoute = (
    <ProtectedRoute path={SLOTS_BOOKING_PATH} component={SlotsBookingRoute}/>

);
