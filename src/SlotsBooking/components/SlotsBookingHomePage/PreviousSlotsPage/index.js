import React from "react";
import { observer, inject } from "mobx-react";
import LoadingWrapperWithFailure from "../../../../Common/LoadingWrapper/LoadingWrapperWithFailure";
import NoDataView from "../../../../Common/LoadingWrapper/NoDataView";
import { Typo14DarkBlueGreyHKGroteskRegular } from "../../../../styleGuide/Typos";
import Strings from "../../../i18n/strings.json";
import { PreviousSlotsHeading } from "../../../common/components";
import NavigationBar from "../../../common/components/NavigationBar";
import { PREVIOUS_SLOTS_PAGE_PATH } from '../../../constants/routeConstants/RouteConstants';
import {
    PreviousSlotsContainer,
    PreviousSlotsTableTitles,
    PreviousSlotsTableData,
    PreviousSlotsTableRow,
    PreviousSlotsAndNavBar
}
from "./styledComponent";

@inject('slotsDashBoardStore')

@observer
class PreviousSlots extends React.Component {


    componentDidMount() {
        this.getPreviousSLotsDetails();

    }

    getPreviousSLotsDetails = () => {
        this.props.slotsDashBoardStore.getPreviousSlotsData();
    }

    renderSuccessUi = observer(() => {
        const { previousSlots } = this.props.slotsDashBoardStore;



        if (previousSlots.length == 0) {
            return <NoDataView/>
        }

        return <PreviousSlotsTableData > { previousSlots.map(obj => 
                            <PreviousSlotsTableRow key={obj.date}>
                                <Typo14DarkBlueGreyHKGroteskRegular>
                                    {obj.date}
                                </Typo14DarkBlueGreyHKGroteskRegular>
                                <Typo14DarkBlueGreyHKGroteskRegular>
                                    {obj.startTime+" - "+obj.endTime}
                                </Typo14DarkBlueGreyHKGroteskRegular>
                                <Typo14DarkBlueGreyHKGroteskRegular>
                                    {obj.washingMachineId}
                                </Typo14DarkBlueGreyHKGroteskRegular>
                            </PreviousSlotsTableRow>) } 
                </PreviousSlotsTableData>




    })

    render() {
        const { date, time, washingMachineId } = Strings.previousSlots;

        const {
            getPreviousSlotsResponseStatus,
            getPreviousSlotsResponseError
        } = this.props.slotsDashBoardStore;


        return <PreviousSlotsAndNavBar >

                    <NavigationBar pathName={PREVIOUS_SLOTS_PAGE_PATH}/>

                    <PreviousSlotsContainer >
    
                            <PreviousSlotsTableTitles>
                                <PreviousSlotsHeading>{date}</PreviousSlotsHeading>
                                <PreviousSlotsHeading>{time}</PreviousSlotsHeading>
                                <PreviousSlotsHeading>{washingMachineId}</PreviousSlotsHeading>
                            </PreviousSlotsTableTitles>
        
        
                            <LoadingWrapperWithFailure
                                apiStatus={getPreviousSlotsResponseStatus}
                                apiError={getPreviousSlotsResponseError}
                                onRetryClick={this.getPreviousSLotsDetails}
                                renderSuccessUI={this.renderSuccessUi}
                            />
                </PreviousSlotsContainer>

            </PreviousSlotsAndNavBar>
    }
}

export default PreviousSlots;
