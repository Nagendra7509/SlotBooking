import React from 'react'
import { observer, inject } from 'mobx-react'
import { History } from 'history'
import { observable } from 'mobx'
import { Typo14WhiteHKGroteskSemiBold } from '../../../styleGuide/Typos'
import SideNavBar from '../../common/components/SideNavBar'
import TopNavBar from '../../common/components/TopNavBar'
import ActiveAndInactiveState from '../../common/components/ActiveAndInactiveState'
import { ADMIN_PAGE_WASHINGMACHINE_ACTIVE } from '../../constants/routeConstants/RouteConstants'
import WashingMachineCard from '../../common/components/WashingMachineCard'
import { activeAndInactive } from '../../i18n/strings.json'
import AdminStore from '../../stores/AdminStore'
import PopUp from '../PopUp'
import {
   WashingMachineActiveContainer,
   SideNavBarAndActiveMachines,
   ActiveMachines,
   ActiveMachineCards,
   AddNewMachine
} from './styledComponents'

interface WashingMachineActiveProps {
   history: History
}

interface InjectedProps extends WashingMachineActiveProps {
   adminStore: AdminStore
}

@inject('adminStore')
@observer
class WashingMachineActive extends React.Component<WashingMachineActiveProps> {
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
         activeWashingMachines,
         onClickNewWashingMachine
      } = this.getAdminStore()

      return (
         <WashingMachineActiveContainer>
            <TopNavBar path={ADMIN_PAGE_WASHINGMACHINE_ACTIVE} />
            <SideNavBarAndActiveMachines>
               <SideNavBar path={ADMIN_PAGE_WASHINGMACHINE_ACTIVE} />

               <ActiveMachines>
                  <ActiveAndInactiveState
                     path={ADMIN_PAGE_WASHINGMACHINE_ACTIVE}
                  />

                  <AddNewMachine>
                     <Typo14WhiteHKGroteskSemiBold
                        onClick={this.onClickAddWashingMachine}
                     >
                        + {activeAndInactive.addNewMachine}
                     </Typo14WhiteHKGroteskSemiBold>
                  </AddNewMachine>

                  <ActiveMachineCards>
                     {activeWashingMachines.length > 0 &&
                        activeWashingMachines.map(obj => (
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
                  </ActiveMachineCards>
               </ActiveMachines>
               {this.isClickedAddNewMachine && (
                  <PopUp
                     onClickAddMachine={this.onClickAddWashingMachine}
                     onClickNewWashingMachine={onClickNewWashingMachine}
                  />
               )}
            </SideNavBarAndActiveMachines>
         </WashingMachineActiveContainer>
      )
   }
}

export default WashingMachineActive
