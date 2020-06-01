import React from "react";
import { observer } from "mobx-react";
import SlotBookingDashBoard from "../../../SlotsDashBoard/components/DashBoard";
import NavigationBar from "../../common/components/NavigationBar";
import {
    SlotsBookingHomePageContainer
}
from "./styledComponent";

@observer
class SlotsBookingHomePage extends React.Component {


    render() {

        return <SlotsBookingHomePageContainer>
                <NavigationBar/>
                <SlotBookingDashBoard/>
        </SlotsBookingHomePageContainer>;

    }
}

export default SlotsBookingHomePage;
