import React from "react";
import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";
import SlotsBookingHomePage from "../components/SlotsBookingHomePage";

@inject('slotsDashBoardStore')

@observer
class SlotsBookingRoute extends React.Component {
    @observable currentPage = "Home";

    @action.bound
    onClickHome() {
        this.currentPage = "Home";
    }

    @action.bound
    onClickRequests() {
        this.currentPage = "Requests";
    }

    @action.bound
    onClickReportAnIssue() {
        this.currentPage = "ReportAnIssue";
    }

    @action.bound
    onClickPreviousSlots() {
        this.currentPage = "PreviousSlots";
    }

    @action.bound
    onClickProfile() {
        this.currentPage = "Profile";
    }


    // onClickChangePage = (event) => {
    //     console.log('called', event);
    //     this.currentPage = event.target.value;
    //     console.log(this.currentPage);
    // }


    render() {
        const { previousSlots } = this.props.slotsDashBoardStore;

        return <SlotsBookingHomePage
                currentPage={this.currentPage}
                onClickHome={this.onClickHome}
                onClickRequests={this.onClickRequests}
                onClickReportAnIssue={this.onClickReportAnIssue}
                onClickPreviousSlots={this.onClickPreviousSlots}
                onClickProfile={this.onClickProfile}
                previousSlots={previousSlots}
            />;
    }
}

export default SlotsBookingRoute;
