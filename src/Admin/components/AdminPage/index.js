import React from "react";
import { observer, inject } from "mobx-react";
import TopNavBar from "../../common/components/TopNavBar";
import SideNavBar from "../../common/components/SideNavBar";
import IssuesPage from "../IssuesPage";
import { ADMIN_PAGE_PATH_ISSUES } from "../../constants/routeConstants/RouteConstants";
@inject('adminStore')
@observer
class AdminPage extends React.Component {

    componentDidMount() {
        this.requestForAdminResponse();
    }

    requestForAdminResponse = () => {
        const { getAdminResponse } = this.props.adminStore;
        getAdminResponse();
    }

    render() {
        //const urls = [...washingMachineUrls];
        //console.log(Math.floor(Math.random() * (5 + 0 + 1), "rfgrf"));

        return <div>
                <TopNavBar path={ADMIN_PAGE_PATH_ISSUES}/>
                <div className="flex">
                    <SideNavBar path={ADMIN_PAGE_PATH_ISSUES}/>
                    <IssuesPage/>
                </div>
                </div>;
    }
}

export default AdminPage;
