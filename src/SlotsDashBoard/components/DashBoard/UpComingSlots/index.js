import React from "react";

import { observer } from "mobx-react";

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
import Strings from "../../../i18n/strings.json";

@observer
class UpComomingSlots extends React.Component {

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
            upComingSlotsDetails,

        } = this.props;

        const {
            washingMachineId,
            timeSlot,
            cancel,
            upComingSlots,
            noBookingsYet
        } = Strings.upComingSlots;

        return <UpComingSlotsContainer>
                    
                    
                    <UpComomingSlotText>
                    {upComingSlots}
                    </UpComomingSlotText>
                    <DatesAndSlotsDetails>
                    {upComingSlotsDetails.washing_machine_id!="" && 
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
                            <WashingMachineId>{washingMachineId}{upComingSlotsDetails.washing_machine_id}</WashingMachineId>
                            <TimeSlot>{timeSlot}{upComingSlotsDetails.time_slot}</TimeSlot>
                        </SlotsDetails>
                        <CancelBtnContainer>
                            <CancelBtn onClick={this.onClickCancelSlot}>{cancel}</CancelBtn>
                        </CancelBtnContainer>
                        </DateAndSlots>}
                        {upComingSlotsDetails.washing_machine_id=="" && 
                        <NoBookingsContainer>
                            <NoBookingImg src={noBookingImg.noBookingAdress}/>
                            <NoBookingsYetText>{noBookingsYet}<NotSymbolImg src={notSymbol.notSymbolAdress}/></NoBookingsYetText>
                        </NoBookingsContainer>
                        
                                    }
                    
                    </DatesAndSlotsDetails>
                    
                    
                    
                
                </UpComingSlotsContainer>;

    }
}

export default UpComomingSlots;
