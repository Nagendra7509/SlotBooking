import React from "react";
import { observer, inject } from "mobx-react";
import { withRouter } from "react-router-dom";
import { observable, action } from "mobx";
import SlotsBookingHomePage from "../components/SlotsBookingHomePage";

@inject('slotsDashBoardStore')
@observer
class SlotsBookingRoute extends React.Component {

    render() {

        return <SlotsBookingHomePage
            
            />;
    }
}

export default withRouter(SlotsBookingRoute);
