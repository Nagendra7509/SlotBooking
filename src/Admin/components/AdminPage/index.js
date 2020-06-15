import React from 'react'
import { observer, inject } from 'mobx-react'
import TopNavBar from '../../common/components/TopNavBar'
import SideNavBar from '../../common/components/SideNavBar'
import IssuesPage from '../IssuesPage'
import { ADMIN_PAGE_PATH_ISSUES } from '../../constants/routeConstants/RouteConstants'
import { AdminHomePageContainer, SideNavBarAndIssues } from './styledComponents'

@inject('adminStore')
@observer
class AdminPage extends React.Component {
   componentDidMount() {
      this.requestForAdminResponse()
   }

   requestForAdminResponse = () => {
      const { getAdminResponse } = this.props.adminStore
      getAdminResponse()
   }

   render() {
      return (
         <AdminHomePageContainer>
            <TopNavBar path={ADMIN_PAGE_PATH_ISSUES} />
            <SideNavBarAndIssues>
               <SideNavBar path={ADMIN_PAGE_PATH_ISSUES} />
               <IssuesPage />
            </SideNavBarAndIssues>
         </AdminHomePageContainer>
      )
   }
}

export default AdminPage
