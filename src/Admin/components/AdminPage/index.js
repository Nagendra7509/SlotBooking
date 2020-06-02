import React from "react";
import { observer, inject } from "mobx-react";
import TopNavBar from "../../common/components/TopNavBar";
import SideNavBar from "../../common/components/SideNavBar";
import IssuesPage from "../IssuesPage";

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
                <TopNavBar/>
                <div className="flex">
                    <SideNavBar/>
                    <IssuesPage/>
                </div>
                </div>;
    }
}

export default AdminPage;
