import React from 'react'
import { observer } from 'mobx-react'
import { sideNav } from '../../../i18n/strings.json'
import {
   ADMIN_PAGE_PATH_ISSUES,
   ADMIN_PAGE_SETTINGS,
   ADMIN_PAGE_WASHINGMACHINE_ACTIVE
} from '../../../constants/routeConstants/RouteConstants'
import { SideNavItem } from '../'
import { SideNavBarContainer } from './styledComponent'

@observer
class SideNavBar extends React.Component {
   render() {
      const { issues, washingMachine, settings } = sideNav
      const { path } = this.props

      return (
         <SideNavBarContainer>
            <SideNavItem path={path} href={ADMIN_PAGE_PATH_ISSUES}>
               {issues}
            </SideNavItem>
            <SideNavItem path={path} href={ADMIN_PAGE_WASHINGMACHINE_ACTIVE}>
               {washingMachine}
            </SideNavItem>
            <SideNavItem path={path} href={ADMIN_PAGE_SETTINGS}>
               {settings}
            </SideNavItem>
         </SideNavBarContainer>
      )
   }
}

export default SideNavBar
