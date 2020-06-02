import React from "react";

import { observer } from "mobx-react";
import { Status } from '../';
import { activeAndInactive } from "../../../i18n/strings.json";
import {
    ADMIN_PAGE_WASHINGMACHINE_ACTIVE,
    ADMIN_PAGE_WASHINGMACHINE_INACTIVE
}
from "../../../constants/routeConstants/RouteConstants";
import { ActiveAndInactiveContainer, ActiveAndInactiveBar } from "./styledComponents.js";

@observer
class ActiveAndInactiveState extends React.Component {

    render() {

        const { active, inActive } = activeAndInactive;
        return (
            <ActiveAndInactiveContainer>
                    <ActiveAndInactiveBar>
                        <Status
                            href={ADMIN_PAGE_WASHINGMACHINE_ACTIVE}
                            >{active}
                        </Status>
                        <Status
                            href={ADMIN_PAGE_WASHINGMACHINE_INACTIVE}
                            >{inActive}
                        </Status>
                    </ActiveAndInactiveBar>
                </ActiveAndInactiveContainer>
        );

    }
}

export default ActiveAndInactiveState;
