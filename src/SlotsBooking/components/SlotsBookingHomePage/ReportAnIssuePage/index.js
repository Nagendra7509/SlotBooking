import React from "react";

import { observer } from "mobx-react";

import Strings from "../../../i18n/strings.json";
import {
    RequestsContainer,
    RequestBox,
    ReportIssueText,
    DescriptionText,
    ReportInputBox,
    ReportBtn
}
from "./styledComponent";

@observer
class ReportAnIssue extends React.Component {

    render() {
        return <RequestsContainer>
                    <RequestBox>
                        <ReportIssueText>
                            {Strings.reportAnIssue.reportIssue}
                        </ReportIssueText>
                        
                        <DescriptionText>
                            {Strings.reportAnIssue.description}
                        </DescriptionText>
                            
                        <ReportInputBox type="textarea" placeholder={Strings.reportAnIssue.placeHolderOfReportAnIssue}/>
                        <ReportBtn>{Strings.reportAnIssue.report}</ReportBtn>
                    </RequestBox>
                </RequestsContainer>;
    }
}

export default ReportAnIssue;
