import React from "react";
import { ProtectedRoute } from "../../Common/ProtectedRoute";
import AdminPage from "../components/AdminPage";
import {
    ADMIN_PAGE_PATH_ISSUES,
    ADMIN_PAGE_PROFILE,
    ADMIN_PAGE_SETTINGS,
    ADMIN_PAGE_WASHINGMACHINE_ACTIVE,
    ADMIN_PAGE_WASHINGMACHINE_INACTIVE
}
from "../constants/routeConstants/RouteConstants";
import ProfilePage from "../components/ProfilePage";
import Settings from "../components/Settings";
import WashingMachineActive from "../components/WashingMachineActivePage";
import WashingMachineInactive from '../components/WashingMachineInActivePage';
export const adminPageRoutes = [
    <ProtectedRoute path={ADMIN_PAGE_PATH_ISSUES} component={AdminPage}/>,
    <ProtectedRoute path = { ADMIN_PAGE_PROFILE } component ={ProfilePage}/>,
    <ProtectedRoute path = { ADMIN_PAGE_SETTINGS } component ={Settings}/>,
    <ProtectedRoute path = { ADMIN_PAGE_WASHINGMACHINE_ACTIVE } component ={WashingMachineActive}/>,
    <ProtectedRoute path = { ADMIN_PAGE_WASHINGMACHINE_INACTIVE } component={WashingMachineInactive}/>

];
