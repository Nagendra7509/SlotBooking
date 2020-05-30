import React from "react";
import { observer } from "mobx-react";

import Strings from "../../../i18n/strings.json";
import { noBookingImg, notSymbol } from "../../../assets/";
import {
    UpComingSlotsContainer,
    UpComomingSlotText,
    DatesAndSlotsDetails,
    Dates,
    DateBtn,
    SlotsDetails,
    CancelBtnContainer,
    CancelBtn,
    WashingMachineId,
    NoBookingsContainer,
    NoBookingImg,
    DateAndSlots,
    NotSymbolImg,
    NoBookingsYetText,
    TimeSlot
}
from "./styledComponent";

@observer
class UpComingSlots extends React.Component {

    onClickDateUpComingSlots = (event) => {
        const { onClickDateUpComingSlots } = this.props;
        onClickDateUpComingSlots(event.target.id);
    }

    onClickCancelSlot = () => {
        const { onClickCancelSlot } = this.props;
        onClickCancelSlot();
    }



    render() {
        const {
            upComingSlotsDates,
            upComingSlotsCurrentDate,
            upComingSlotsDetails
        } = this.props;

        const {
            washingMachineId,
            timeSlot,
            cancel,
            upComingSlots,
            noBookingsYet
        } = Strings.upComingSlots;


        //console.log('render upComingSlots')
        const { time_slot } = upComingSlotsDetails;
        // (time_slot && console.log(time_slot.start_time));

        return <UpComingSlotsContainer>

                    <UpComomingSlotText>
                        {upComingSlots}
                    </UpComomingSlotText>
                    <DatesAndSlotsDetails>
                        {upComingSlotsDetails.washingMachineId!="" && 
                            <DateAndSlots>

                                <Dates>
                                 {upComingSlotsDates.map(obj=><DateBtn 
                                                                id={obj}
                                                                onClick={this.onClickDateUpComingSlots} 
                                                                click={obj==upComingSlotsCurrentDate} 
                                                                key={obj}>{obj}
                                                            </DateBtn>)}
                                </Dates>

                                <SlotsDetails>
                                    <WashingMachineId>
                                        {washingMachineId}{upComingSlotsDetails.washingMachineId}
                                    </WashingMachineId>
                                    <TimeSlot>
                                        {timeSlot}
                                        {upComingSlotsDetails.startTime+" - "+upComingSlotsDetails.endTime}</TimeSlot>
                                </SlotsDetails>

                                <CancelBtnContainer>
                                    <CancelBtn onClick={this.onClickCancelSlot}>{cancel}</CancelBtn>
                                </CancelBtnContainer>

                            </DateAndSlots>}
                        {upComingSlotsDetails.washingMachineId=="" && 
                        <NoBookingsContainer>
                            <NoBookingImg src={noBookingImg.noBookingAdress}/>
                            <NoBookingsYetText>{noBookingsYet}<NotSymbolImg src={notSymbol.notSymbolAdress}/></NoBookingsYetText>
                        </NoBookingsContainer>}

                    </DatesAndSlotsDetails>

                </UpComingSlotsContainer>;

    }
}

export default UpComingSlots;
