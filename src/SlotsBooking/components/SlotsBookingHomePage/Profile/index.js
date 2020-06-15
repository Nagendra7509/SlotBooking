import React from 'react'
import { observer } from 'mobx-react'
import { LOGIN_PATH } from '../../../../Authentication/constants/routeConstants/RouteConstants'
import { clearUserSession } from '../../../../utils/StorageUtils'
import NavigationBar from '../../../common/components/NavigationBar'
import { PROFILE_PAGE } from '../../../constants/routeConstants/RouteConstants'
import {
   LogoutBtn,
   ProfileViewContainer,
   ProfilePageAndNavBar
} from './styledComponent'

@observer
class Profile extends React.Component {
   onClickLogout = () => {
      clearUserSession()

      const { history } = this.props
      history.push(LOGIN_PATH)
   }

   render() {
      return (
         <ProfilePageAndNavBar>
            <NavigationBar pathName={PROFILE_PAGE} />

            <ProfileViewContainer>
               <LogoutBtn onClick={this.onClickLogout}>Logout</LogoutBtn>
            </ProfileViewContainer>
         </ProfilePageAndNavBar>
      )
   }
}

export default Profile
