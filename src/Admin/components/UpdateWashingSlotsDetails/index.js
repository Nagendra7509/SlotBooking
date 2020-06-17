import React from 'react'
import { observer, inject } from 'mobx-react'
import SideNavBar from '../../common/components/SideNavBar'
import TopNavBar from '../../common/components/TopNavBar'
import { updateSlots } from '../../i18n/strings.json'
import {
   UpDateSlotContainer,
   SideNavBarAndSlotsDetails,
   SlotDetailsContainer,
   Header,
   WashingMachineId,
   DayContainer,
   ArrowBtn,
   Day,
   UpdateSlotsTable,
   TableTitles,
   SlotsHeading,
   FromHeading,
   ToHeading,
   SlotDetails,
   SlotNumber,
   FromTime,
   ToTime,
   CloseImgBtn,
   Delete,
   FromTimeContainer,
   SelectTag,
   Option,
   ToContainer,
   Footer,
   AddNewSlot,
   UpdateBtn
}
from './styledComponents'

@inject('adminStore')
@observer
class UpdateWashingSlotsDetails extends React.Component {
   constructor(props) {
      super(props)
      this.getUpdateSlotsData()
   }

   getUpdateSlotsData = async() => {
      const {
         getAdminResponse,
         onClickUpdateInWashingMachineCard
      } = this.props.adminStore
      await getAdminResponse()
      const { history } = this.props
      const machineId = history.location.pathname.split('/')
      //alert(machineId[machineId.length - 1]);
      await onClickUpdateInWashingMachineCard(machineId[machineId.length - 1])
   }

   onClickCloseBtn = event => {
      const { onClickCloseBtn } = this.props.adminStore
      onClickCloseBtn(event.target.id)
   }

   onClickAddNewSlot = () => {
      const { onClickAddNewSlot } = this.props.adminStore
      onClickAddNewSlot()
   }

   onChangeStartTimeInUpdateSlots = event => {
      const { onChangeStartTimeInUpdateSlots } = this.props.adminStore
      onChangeStartTimeInUpdateSlots(event.target.id, event.target.value)
   }

   onChangeEndTimeInUpdateSlots = event => {
      const { onChangeEndTimeInUpdateSlots } = this.props.adminStore
      onChangeEndTimeInUpdateSlots(event.target.id, event.target.value)
   }

   onClickUpdateBtn = () => {
      const { onClickUpdateBtn } = this.props.adminStore
      onClickUpdateBtn()
   }

   render() {
      const { updateSlotsResponse } = this.props.adminStore
      const {
         washingMachineID,
         slots,
         from,
         to,
         slot,
         am,
         pm,
         addSlots,
         update
      } = updateSlots
      const closeImgUrl =
         'https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/7da0927e-32b7-480f-a4bc-e513c0df41dd.svg'

      return (
         <UpDateSlotContainer>
            <TopNavBar />

            <SideNavBarAndSlotsDetails>
               <SideNavBar />
               <SlotDetailsContainer>
                  <Header>
                     <WashingMachineId>
                        {washingMachineID}{' '}
                        {updateSlotsResponse.washingMachineId}
                     </WashingMachineId>

                     <DayContainer>
                        <ArrowBtn>{'<'}</ArrowBtn>
                        <Day>{updateSlotsResponse.day}</Day>
                        <ArrowBtn>{'>'}</ArrowBtn>
                     </DayContainer>
                  </Header>
                  <UpdateSlotsTable>
                     {updateSlotsResponse.timeSlots && (
                        <TableTitles>
                           <SlotsHeading>{slots}</SlotsHeading>
                           <FromHeading>{from}</FromHeading>
                           <ToHeading>{to}</ToHeading>
                           <Delete>Delete</Delete>
                        </TableTitles>
                     )}
                     {updateSlotsResponse.timeSlots &&
                        updateSlotsResponse.timeSlots.map((obj, index) => (
                           <SlotDetails key={obj.id}>
                              <SlotNumber>
                                 {slot} {index + 1}
                              </SlotNumber>
                              <FromTimeContainer>
                                 <FromTime>{obj.startTime}</FromTime>
                                 <SelectTag
                                    id={obj.id}
                                    onChange={
                                       this.onChangeStartTimeInUpdateSlots
                                    }
                                 >
                                    <Option hidden={true}></Option>
                                    <Option value={am}>{am}</Option>
                                    <Option value={pm}>{pm}</Option>
                                 </SelectTag>
                              </FromTimeContainer>
                              <ToContainer>
                                 <ToTime>{obj.endTime}</ToTime>
                                 <SelectTag
                                    id={obj.id}
                                    onChange={this.onChangeEndTimeInUpdateSlots}
                                 >
                                    <Option hidden={true}></Option>
                                    <Option value={am}>{am}</Option>
                                    <Option value={pm}>{pm}</Option>
                                 </SelectTag>
                              </ToContainer>

                              <CloseImgBtn
                                 id={obj.id}
                                 onClick={this.onClickCloseBtn}
                                 src={closeImgUrl}
                                 alt={'close'}
                              />
                           </SlotDetails>
                        ))}
                  </UpdateSlotsTable>
                  <Footer>
                     <AddNewSlot onClick={this.onClickAddNewSlot}>
                        {addSlots}
                     </AddNewSlot>
                     <UpdateBtn onClick={this.onClickUpdateBtn}>
                        {update}
                     </UpdateBtn>
                  </Footer>
               </SlotDetailsContainer>
            </SideNavBarAndSlotsDetails>
         </UpDateSlotContainer>
      )
   }
}

export default UpdateWashingSlotsDetails
