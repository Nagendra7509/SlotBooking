import React from "react";

import '../../../styles/tailwind.css';
import LoadingView from "./LoadingView";

export default {

    component: LoadingView,
    title: 'Common/LoadingView'

};


export const defaultView = () => <LoadingView />;
