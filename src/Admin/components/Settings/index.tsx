import React from 'react'
import { observer } from 'mobx-react'
import TopNavBar from '../../common/components/TopNavBar'
import SideNavBar from '../../common/components/SideNavBar'
import { ADMIN_PAGE_SETTINGS } from '../../constants/routeConstants/RouteConstants'
import {
   SettingsPageContainer,
   SideNavBarAndSettings,
   SettingsHeading
} from './styledComponents'

@observer
class Settings extends React.Component {
   render() {
      return (
         <SettingsPageContainer>
            <TopNavBar path={ADMIN_PAGE_SETTINGS} />

            <SideNavBarAndSettings>
               <SideNavBar path={ADMIN_PAGE_SETTINGS} />
               <SettingsHeading>Settings</SettingsHeading>
            </SideNavBarAndSettings>
         </SettingsPageContainer>
      )
   }
}

export default Settings
