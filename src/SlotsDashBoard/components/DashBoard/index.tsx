import React from 'react'
import { observable, action } from 'mobx'
import { observer, inject } from 'mobx-react'
import LoadingWrapperWithFailure from '../../../Common/LoadingWrapper/LoadingWrapperWithFailure/index'
import NoDataView from '../../../Common/LoadingWrapper/NoDataView/index'
import Strings from '../../i18n/strings.json'
import { ColorLabels } from '../../common/components'
import { colors } from '../../themes/Colors'
import SlotsDashBoardStore from '../../stores/SlotsDashBoardStore'
import UpComingSlots from './UpComingSlots'

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
} from './styledComponent'

interface DashBoardProps {}

interface InjectedProps extends DashBoardProps {
   slotsDashBoardStore: SlotsDashBoardStore
}

@inject('slotsDashBoardStore')
@observer
class DashBoard extends React.Component<DashBoardProps> {
   componentDidMount() {
      this.doNetworkCall()
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getSlotsDashBoardStore = () => this.getInjectedProps().slotsDashBoardStore

   doNetworkCall = async () => {
      const {
         getAvailableSlotsData,
         getUpcomingSlotsData,
         getPreviousSlotsData
      } = this.getSlotsDashBoardStore()
      await getAvailableSlotsData()
      await getUpcomingSlotsData()
      await getPreviousSlotsData()
   }

   onClickDateAvailableSlots = event => {
      const { onClickDateAvailableSlots } = this.getSlotsDashBoardStore()
      onClickDateAvailableSlots(event.target.id)
   }

   onClickTime = event => {
      const { onClickTime } = this.getSlotsDashBoardStore()
      onClickTime(event.target.id)
   }

   onClickConfirm = () => {
      const { onClickConfirm } = this.getSlotsDashBoardStore()
      onClickConfirm()
   }

   renderSuccessUI = observer(() => {
      const {
         availableSlotsDates,
         availableSlotsTimings,
         previousSlots,
         currentDate,
         availableSlotsResponse,
         countOfBookingSlotsPerDay
      } = this.getSlotsDashBoardStore()

      const {
         selected,
         booked,
         available,
         confirm,
         slotsAreUnavailable
      } = Strings.slotsDashBoard

      if (
         availableSlotsDates.length == 0 &&
         availableSlotsTimings.length == 0
      ) {
         return <NoDataView />
      }

      return (
         <SlotsDateAndTime>
            <Dates>
               {availableSlotsResponse.length > 0 &&
                  availableSlotsDates.map(date => (
                     <DateBtn
                        onClick={this.onClickDateAvailableSlots}
                        id={date}
                        click={date == currentDate}
                        key={date}
                     >
                        {date}
                     </DateBtn>
                  ))}
            </Dates>

            <SlotTimings>
               <Legend>
                  <ColorLabels colorValue={colors.brightBlue}>
                     {selected}
                  </ColorLabels>
                  <ColorLabels colorValue={colors.lightBlueGrey}>
                     {booked}
                  </ColorLabels>
                  <ColorLabels colorValue={colors.white}>
                     {available}
                  </ColorLabels>
               </Legend>

               <TimeBtns>
                  {availableSlotsTimings.map(obj => (
                     <TimeBtn
                        onClick={this.onClickTime}
                        id={obj.start_time + '-' + obj.end_time}
                        opacityValue={obj.is_available}
                        key={Math.random().toString()}
                     >
                        {obj.start_time} - {obj.end_time}
                     </TimeBtn>
                  ))}
               </TimeBtns>

               <ConfirmBtnContainer>
                  <ConfirmBtn onClick={this.onClickConfirm}>
                     {confirm}
                  </ConfirmBtn>
               </ConfirmBtnContainer>

               {availableSlotsResponse.length > 0 &&
                  countOfBookingSlotsPerDay == availableSlotsTimings.length && (
                     <SlotsUnAvailable>{slotsAreUnavailable}</SlotsUnAvailable>
                  )}
            </SlotTimings>
         </SlotsDateAndTime>
      )
   })

   render() {
      const { availableSlots } = Strings.slotsDashBoard

      const {
         upComingSlotsDates,
         getAvailableSlotsResponseStatus,
         getAvailableSlotsResponseError,
         upComingSlotsCurrentDate,
         upComingSlotsDetails,
         onClickDateUpComingSlots,
         onClickCancelSlot
      } = this.getSlotsDashBoardStore()

      return (
         <DashBoardContainer>
            <AvailableSlots>
               <AvailableSlotsText>{availableSlots}</AvailableSlotsText>

               <LoadingWrapperWithFailure
                  apiStatus={getAvailableSlotsResponseStatus}
                  apiError={getAvailableSlotsResponseError}
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
            />
         </DashBoardContainer>
      )
   }
}

export default DashBoard

//isClicked={obj.is_available}
