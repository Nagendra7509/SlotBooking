import React from "react";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import Strings from "../../i18n/strings.json";

import { ColorLabels } from "../../common/components/";
import { colors } from "../../themes/Colors";
import UpComomingSlots from "./UpComingSlots";

import {
    DashBoardContainer,
    AvailableSlotsText,
    Dates,
    DateBtn,
    SlotTimings,
    Legend,
    TimeBtn,
    SlotsDateAndTime,
    ConfirmBtn,
    ConfirmBtnContainer,
    TimeBtns,
    AvailableSlots
}
from "./styledComponent";
@inject('slotsDashBoardStore')
@observer
class DashBoard extends React.Component {
    @observable isClickedTime;

    componentDidMount() {
        this.doNetworkCall();
    }
    doNetworkCall = async() => {
        await this.props.slotsDashBoardStore.getSlotsData();
    }

    onClickDateAvailableSlots = (event) => {

        const { onClickDateAvailableSlots } = this.props.slotsDashBoardStore;
        onClickDateAvailableSlots(event.target.id);

    }

    onClickTime = (event) => {
        const { onClickTime } = this.props.slotsDashBoardStore;
        onClickTime(event.target.id);
    }

    onClickConfirm = () => {
        const { onClickConfirm } = this.props.slotsDashBoardStore;
        onClickConfirm();
    }



    render() {

        const { availableSlots, selected, booked, available, confirm } = Strings.slotsDashBoard;

        const {
            availableSlotsDates,
            previousSlots,
            currentDate,
            slotsResponse,
            availableSlotsTimings,
            upComingSlotsDates,
            upComingSlotsCurrentDate,
            upComingSlotsDetails,
            onClickDateUpComingSlots,
            onClickCancelSlot
        } = this.props.slotsDashBoardStore;

        //console.log(upComingSlotsDates, "dfg");


        return <DashBoardContainer>
                <AvailableSlots>
                <AvailableSlotsText>
                    {availableSlots}
                </AvailableSlotsText>
                <SlotsDateAndTime>
                    <Dates>
                        {slotsResponse.length>0 && availableSlotsDates.map(date=>
                                            <DateBtn 
                                                onClick={this.onClickDateAvailableSlots} 
                                                id={date} 
                                                click={date==currentDate}
                                                key={date}>{date}
                                            </DateBtn>)}
                    </Dates>
                    <SlotTimings>
                        <Legend>
                            <ColorLabels colorValue={colors.brightBlue}>{selected}</ColorLabels>
                            <ColorLabels colorValue={colors.lightBlueGrey}>{booked}</ColorLabels>
                            <ColorLabels colorValue={colors.white}>{available}</ColorLabels>
                        </Legend>
                        <TimeBtns>
                        {slotsResponse.length>0 && availableSlotsTimings.map(obj=>
                                <TimeBtn
                                    onClick={this.onClickTime}
                                    isClicked={obj.is_available}
                                    id={obj.start_time+"-"+obj.end_time}
                                    opacityValue={obj.is_available} 
                                    key={obj.start_time}>
                                    {obj.start_time} - {obj.end_time}
                                </TimeBtn>)}
                        </TimeBtns>
                        <ConfirmBtnContainer><ConfirmBtn onClick={this.onClickConfirm}>{confirm}</ConfirmBtn></ConfirmBtnContainer>
                    </SlotTimings>
                </SlotsDateAndTime>
                </AvailableSlots>
                <UpComomingSlots
                    upComingSlotsDates={upComingSlotsDates}
                    upComingSlotsCurrentDate={upComingSlotsCurrentDate}
                    upComingSlotsDetails={upComingSlotsDetails}
                    onClickDateUpComingSlots={onClickDateUpComingSlots}
                    onClickCancelSlot={onClickCancelSlot}

                />
            </DashBoardContainer>;
    }
}

export default DashBoard;
