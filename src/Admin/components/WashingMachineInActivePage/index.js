import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { Typo14WhiteHKGroteskSemiBold } from '../../../styleGuide/Typos'
import SideNavBar from '../../common/components/SideNavBar'
import TopNavBar from '../../common/components/TopNavBar'
import ActiveAndInactiveState from '../../common/components/ActiveAndInactiveState'
import { ADMIN_PAGE_WASHINGMACHINE_INACTIVE } from '../../constants/routeConstants/RouteConstants'
import WashingMachineCard from '../../common/components/WashingMachineCard'
import { activeAndInactive } from '../../i18n/strings.json'
import PopUp from '../PopUp'
import {
   WashingMachineInActiveContainer,
   SideNavBarAndInActiveMachines,
   InActiveMachines,
   InActiveMachineCards,
   AddNewMachine
} from './styledComponents'

@inject('adminStore')
@observer
class WashingMachineInactive extends React.Component {
   @observable isClickedAddNewMachine = false

   componentDidMount() {
      this.props.adminStore.getAdminResponse()
   }

   onClickUpdate = event => {
      const { onClickUpdateInWashingMachineCard } = this.props.adminStore
      onClickUpdateInWashingMachineCard(event.target.id)

      const { updateMachineId, updateMachineStatus } = this.props.adminStore

      const { history } = this.props
      history.push(
         `/slot-booking/admin/washingMachine/details/${updateMachineStatus}/${updateMachineId}`
      )
   }

   onClickActiveOrInactiveStatus = event => {
      const { onClickActiveOrInactiveStatus } = this.props.adminStore
      onClickActiveOrInactiveStatus(event.target.id)
   }

   onClickAddMachine = () => {
      this.isClickedAddNewMachine = !this.isClickedAddNewMachine
   }

   render() {
      const {
         inActiveWashingMachines,
         onClickNewWashingMachine
      } = this.props.adminStore

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
                        onClick={this.onClickAddMachine}
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
                     onClickAddMachine={this.onClickAddMachine}
                     onClickNewWashingMachine={onClickNewWashingMachine}
                  />
               )}
            </SideNavBarAndInActiveMachines>
         </WashingMachineInActiveContainer>
      )
   }
}

export default WashingMachineInactive
