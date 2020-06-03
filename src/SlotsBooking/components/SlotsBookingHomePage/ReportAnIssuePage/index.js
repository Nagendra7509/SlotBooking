import React from "react";
import { observer } from "mobx-react";
import Strings from "../../../i18n/strings.json";
import NavigationBar from "../../../common/components/NavigationBar";
import { REPORTANISSUE_PAGE_PATH } from "../../../constants/routeConstants/RouteConstants";
import {
    RequestsContainer,
    RequestBox,
    ReportIssueText,
    DescriptionText,
    ReportInputBox,
    ReportBtn,
    ReportAnIssuePageAndNavBar
}
from "./styledComponent";

@observer
class ReportAnIssue extends React.Component {

    render() {

        return <ReportAnIssuePageAndNavBar>
        
                    <NavigationBar pathName={REPORTANISSUE_PAGE_PATH}/>
                    
                    <RequestsContainer>
            
                        <RequestBox>
                    
                            <ReportIssueText>
                                {Strings.reportAnIssue.reportIssue}
                            </ReportIssueText>
                        
                            <DescriptionText>
                                {Strings.reportAnIssue.description}
                            </DescriptionText>
                                
                            <ReportInputBox 
                                type="textarea" 
                                placeholder={Strings.reportAnIssue.placeHolderOfReportAnIssue}
                            />  
                        
                            <ReportBtn>{Strings.reportAnIssue.report}</ReportBtn>
                        
                        </RequestBox>
                        
                    </RequestsContainer>
                    
                </ReportAnIssuePageAndNavBar>;
    }
}

export default ReportAnIssue;
