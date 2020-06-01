import React from "react";
import AdminPage from "../components/AdminPage";
import { ProtectedRoute } from "../../Common/ProtectedRoute";
import { ADMIN_PAGE_PATH_ISSUES } from "../constants/routeConstants/RouteConstants";

export const adminPageRoutes = [
    <ProtectedRoute path={ADMIN_PAGE_PATH_ISSUES} component={AdminPage}/>
];
