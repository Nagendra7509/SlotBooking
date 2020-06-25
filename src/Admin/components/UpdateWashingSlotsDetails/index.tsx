import React from 'react'
import { History } from 'history'
import { observer, inject } from 'mobx-react'

import SideNavBar from '../../common/components/SideNavBar'
import TopNavBar from '../../common/components/TopNavBar'
import { updateSlots } from '../../i18n/strings.json'
import AdminStore from '../../stores/AdminStore'
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
} from './styledComponents'

interface UpdateWashingSlotsDetailsProps {
   history: History
}

interface InjectedProps extends UpdateWashingSlotsDetailsProps {
   adminStore: AdminStore
}

@inject('adminStore')
@observer
class UpdateWashingSlotsDetails extends React.Component<
   UpdateWashingSlotsDetailsProps
> {
   componentDidMount() {
      this.getUpdateSlotsData()
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getAdminStore = () => this.getInjectedProps().adminStore

   getUpdateSlotsData = async () => {
      const {
         getAdminResponse,
         onClickUpdateInWashingMachineCard
      } = this.getAdminStore()
      await getAdminResponse()
      const { history } = this.props
      const machineId = history.location.pathname.split('/')

      await onClickUpdateInWashingMachineCard(machineId[machineId.length - 1])
   }

   onClickCloseBtn = event => {
      const { onClickCloseBtn } = this.getAdminStore()
      onClickCloseBtn(event.target.id)
   }

   onClickAddNewSlot = () => {
      const { onClickAddNewSlot } = this.getAdminStore()
      onClickAddNewSlot()
   }

   onChangeStartTimeInUpdateSlots = (
      event: React.ChangeEvent<HTMLSelectElement>
   ) => {
      const { onChangeStartTimeInUpdateSlots } = this.getAdminStore()
      onChangeStartTimeInUpdateSlots(event.target.id, event.target.value)
   }

   onChangeEndTimeInUpdateSlots = (
      event: React.ChangeEvent<HTMLSelectElement>
   ) => {
      const { onChangeEndTimeInUpdateSlots } = this.getAdminStore()
      onChangeEndTimeInUpdateSlots(event.target.id, event.target.value)
   }

   onClickUpdateBtn = () => {
      const { onClickUpdateBtn } = this.getAdminStore()
      onClickUpdateBtn()
   }

   render() {
      const { updateSlotsResponse } = this.getAdminStore()
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
            <TopNavBar path={''} />

            <SideNavBarAndSlotsDetails>
               <SideNavBar path={''} />
               <SlotDetailsContainer>
                  <Header>
                     <WashingMachineId>
                        {washingMachineID}{' '}
                        {updateSlotsResponse &&
                           updateSlotsResponse.washingMachineId}
                     </WashingMachineId>

                     <DayContainer>
                        <ArrowBtn>{'<'}</ArrowBtn>
                        <Day>
                           {updateSlotsResponse && updateSlotsResponse.day}
                        </Day>
                        <ArrowBtn>{'>'}</ArrowBtn>
                     </DayContainer>
                  </Header>
                  <UpdateSlotsTable>
                     {
                        <TableTitles>
                           <SlotsHeading>{slots}</SlotsHeading>
                           <FromHeading>{from}</FromHeading>
                           <ToHeading>{to}</ToHeading>
                           <Delete>Delete</Delete>
                        </TableTitles>
                     }
                     {updateSlotsResponse &&
                        updateSlotsResponse.timeSlots.map((obj, index) => (
                           <SlotDetails key={obj.id}>
                              <SlotNumber>
                                 {slot} {index + 1}
                              </SlotNumber>
                              <FromTimeContainer>
                                 <FromTime>{obj.startTime}</FromTime>
                                 <SelectTag
                                    id={obj.id.toString()}
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
                                    id={obj.id.toString()}
                                    onChange={this.onChangeEndTimeInUpdateSlots}
                                 >
                                    <Option hidden={true}></Option>
                                    <Option value={am}>{am}</Option>
                                    <Option value={pm}>{pm}</Option>
                                 </SelectTag>
                              </ToContainer>

                              <CloseImgBtn
                                 id={obj.id.toString()}
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
