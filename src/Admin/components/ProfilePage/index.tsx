import React from 'react'
import { observer } from 'mobx-react'
import {History} from "history";
import { clearUserSession } from '../../../utils/StorageUtils'
import { LOGIN_PATH } from '../../../Authentication/constants/routeConstants/RouteConstants'
import TopNavBar from '../../common/components/TopNavBar'
import SideNavBar from '../../common/components/SideNavBar'
import { ADMIN_PAGE_PROFILE } from '../../constants/routeConstants/RouteConstants'
import {
   ProfilePageContainer,
   SideNavBarAndProfile,
   LogOutBtnContainer,
   LogOutBtn
} from './styledComponents'

type ProfilePageProps={
   history:History
}

@observer
class ProfilePage extends React.Component<ProfilePageProps> {
   onClickLogout = () => {
      clearUserSession()
      const { history } = this.props
      history.push(LOGIN_PATH)
   }

   render() {
      return (
         <ProfilePageContainer>
            <TopNavBar path={ADMIN_PAGE_PROFILE} />
            <SideNavBarAndProfile>
               <SideNavBar path={ADMIN_PAGE_PROFILE} />
               <LogOutBtnContainer>
                  <LogOutBtn onClick={this.onClickLogout}>LogOut</LogOutBtn>
               </LogOutBtnContainer>
            </SideNavBarAndProfile>
         </ProfilePageContainer>
      )
   }
}

export default ProfilePage
