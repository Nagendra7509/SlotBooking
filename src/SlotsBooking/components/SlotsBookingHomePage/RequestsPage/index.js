import React from "react";
import { observer } from "mobx-react";
import NavigationBar from "../../../common/components/NavigationBar";
import { RequestPageWithNavBar } from "./styledComponent";


@observer
class Requests extends React.Component {

    render() {
        return <RequestPageWithNavBar>
                    <NavigationBar/>
                    <h1 className="text-center">Requests Page</h1>
                </RequestPageWithNavBar>;
    }
}

export default Requests;
