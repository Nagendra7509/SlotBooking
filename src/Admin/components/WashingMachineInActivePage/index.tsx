import React from 'react'
import { observer, inject } from 'mobx-react'
import { History } from 'history'
import { observable } from 'mobx'
import { Typo14WhiteHKGroteskSemiBold } from '../../../styleGuide/Typos'
import SideNavBar from '../../common/components/SideNavBar'
import TopNavBar from '../../common/components/TopNavBar'
import ActiveAndInactiveState from '../../common/components/ActiveAndInactiveState'
import { ADMIN_PAGE_WASHINGMACHINE_INACTIVE } from '../../constants/routeConstants/RouteConstants'
import WashingMachineCard from '../../common/components/WashingMachineCard'
import { activeAndInactive } from '../../i18n/strings.json'
import AdminStore from '../../stores/AdminStore'
import PopUp from '../PopUp'
import {
   WashingMachineInActiveContainer,
   SideNavBarAndInActiveMachines,
   InActiveMachines,
   InActiveMachineCards,
   AddNewMachine
} from './styledComponents'

interface WashingMachineInactiveProps {
   history: History
}

interface InjectedProps extends WashingMachineInactiveProps {
   adminStore: AdminStore
}

@inject('adminStore')
@observer
class WashingMachineInactive extends React.Component<
   WashingMachineInactiveProps
> {
   @observable isClickedAddNewMachine = false

   componentDidMount() {
      this.requestForAdminResponse()
   }

   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   getAdminStore = () => this.getInjectedProps().adminStore

   requestForAdminResponse = () => {
      const { getAdminResponse } = this.getAdminStore()
      getAdminResponse()
   }
   onClickUpdate = event => {
      const { onClickUpdateInWashingMachineCard } = this.getAdminStore()
      onClickUpdateInWashingMachineCard(event.target.id)

      const { updateMachineId, updateMachineStatus } = this.getAdminStore()

      const { history } = this.props
      history.push(
         `/slot-booking/admin/washingMachine/details/${updateMachineStatus}/${updateMachineId}`
      )
   }

   onClickActiveOrInactiveStatus = event => {
      const { onClickActiveOrInactiveStatus } = this.getAdminStore()
      onClickActiveOrInactiveStatus(event.target.id)
   }

   onClickAddWashingMachine = () => {
      this.isClickedAddNewMachine = !this.isClickedAddNewMachine
   }

   render() {
      const {
         inActiveWashingMachines,
         onClickNewWashingMachine
      } = this.getAdminStore()

      return (
         <WashingMachineInActiveContainer>
            <TopNavBar path={ADMIN_PAGE_WASHINGMACHINE_INACTIVE} />
            <SideNavBarAndInActiveMachines>
               <SideNavBar path={ADMIN_PAGE_WASHINGMACHINE_INACTIVE} />

               <InActiveMachines>
                  <ActiveAndInactiveState
                     path={ADMIN_PAGE_WASHINGMACHINE_INACTIVE}
                  />

                  <AddNewMachine>
                     <Typo14WhiteHKGroteskSemiBold
                        onClick={this.onClickAddWashingMachine}
                     >
                        + {activeAndInactive.addNewMachine}
                     </Typo14WhiteHKGroteskSemiBold>
                  </AddNewMachine>

                  <InActiveMachineCards>
                     {inActiveWashingMachines.length > 0 &&
                        inActiveWashingMachines.map(obj => (
                           <WashingMachineCard
                              key={obj.washingMachineId}
                              washingMachineStatus={obj.washingMachineStatus}
                              washingMachineId={obj.washingMachineId}
                              onClickUpdate={this.onClickUpdate}
                              onClickActiveOrInactiveStatus={
                                 this.onClickActiveOrInactiveStatus
                              }
                           />
                        ))}
                  </InActiveMachineCards>
               </InActiveMachines>
               {this.isClickedAddNewMachine && (
                  <PopUp
                     onClickAddMachine={this.onClickAddWashingMachine}
                     onClickNewWashingMachine={onClickNewWashingMachine}
                  />
               )}
            </SideNavBarAndInActiveMachines>
         </WashingMachineInActiveContainer>
      )
   }
}

export default WashingMachineInactive
