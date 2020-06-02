import React from "react";
import { observable } from "mobx";
import { observer, inject } from "mobx-react";
import LoadingWrapperWithFailure from "../../../Common/LoadingWrapper/LoadingWrapperWithFailure/index";
import NoDataView from "../../../Common/LoadingWrapper/NoDataView/index";
import Strings from "../../i18n/strings.json";
import { ColorLabels } from "../../common/components/";
import { colors } from "../../themes/Colors";
import UpComingSlots from "./UpComingSlots";
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
    SlotsUnAvailable,
    AvailableSlots
}
from "./styledComponent";

@inject('slotsDashBoardStore')
@observer
class DashBoard extends React.Component {


    componentDidMount() {
        this.doNetworkCall();
    }

    doNetworkCall = () => {
        this.props.slotsDashBoardStore.getSlotsData();
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

    renderSuccessUI = observer(() => {
        const { availableSlotsDates, availableSlotsTimings } = this.props.slotsDashBoardStore;
        const {
            previousSlots,
            currentDate,
            slotsResponse,
            countOfBookingSlotsPerDay
        } = this.props.slotsDashBoardStore;

        const {
            selected,
            booked,
            available,
            confirm,
            slotsAreUnavailable
        } = Strings.slotsDashBoard;

        if (availableSlotsDates.length == 0 && availableSlotsTimings.length == 0) {
            return <NoDataView />;
        }

        return <SlotsDateAndTime>
                    <Dates>
                        {slotsResponse.length>0 && availableSlotsDates.map(date=>
                                            <DateBtn 
                                                onClick={this.onClickDateAvailableSlots} 
                                                id={date} 
                                                click={date==currentDate}
                                                key={date}>{date}
                                            </DateBtn>)}
                    </Dates>
                    
                    <SlotTimings >
                    
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
                        
                        
                        
                        <ConfirmBtnContainer>
                            
                            <ConfirmBtn 
                                onClick={this.onClickConfirm}
                                >{confirm}
                            </ConfirmBtn>
                        </ConfirmBtnContainer>
                        
                            
                        {(slotsResponse.length>0 && countOfBookingSlotsPerDay==availableSlotsTimings.length) && <SlotsUnAvailable
                            >{slotsAreUnavailable}
                        </SlotsUnAvailable>}
                        
                    </SlotTimings>
                   
                </SlotsDateAndTime>


    })


    render() {

        const { availableSlots } = Strings.slotsDashBoard;

        const {

            upComingSlotsDates,
            getResponseStatus,
            getResponseError,
            upComingSlotsCurrentDate,
            upComingSlotsDetails,
            onClickDateUpComingSlots,
            onClickCancelSlot,
        } = this.props.slotsDashBoardStore;


        return <DashBoardContainer>
                <AvailableSlots>
                
                    <AvailableSlotsText>
                        {availableSlots}
                    </AvailableSlotsText>
                    
                    <LoadingWrapperWithFailure
                        apiStatus={getResponseStatus}
                        apiError={getResponseError}
                        onRetryClick={this.doNetworkCall}
                        renderSuccessUI={this.renderSuccessUI}
                    />
                </AvailableSlots>
                
                <UpComingSlots
                    upComingSlotsDates={upComingSlotsDates}
                    upComingSlotsCurrentDate={upComingSlotsCurrentDate}
                    upComingSlotsDetails={upComingSlotsDetails}
                    onClickDateUpComingSlots={onClickDateUpComingSlots}
                    onClickCancelSlot={onClickCancelSlot}
                    apiStatus={getResponseStatus}
                        apiError={getResponseError}

                />
                
            </DashBoardContainer>;
    }
}

export default DashBoard;
