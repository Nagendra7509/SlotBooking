import React from "react";
import { observer } from "mobx-react";
import { Typo14DarkBlueGreyHKGroteskRegular } from "../../../../styleGuide/Typos";
import Strings from "../../../i18n/strings.json";
import { PreviousSlotsHeading } from "../../../common/components";
import {
    PreviousSlotsContainer,
    PreviousSlotsTableTitles,
    PreviousSlotsTableData,
    PreviousSlotsTableRow
}
from "./styledComponent";

@observer
class PreviousSlots extends React.Component {


    render() {

        const { previousSlots } = this.props;
        const { date, time, washingMachineId } = Strings.previousSlots;
        console.log(previousSlots);

        return <PreviousSlotsContainer>
        
                    <PreviousSlotsTableTitles>
                        <PreviousSlotsHeading>{date}</PreviousSlotsHeading>
                        <PreviousSlotsHeading>{time}</PreviousSlotsHeading>
                        <PreviousSlotsHeading>{washingMachineId}</PreviousSlotsHeading>
                    </PreviousSlotsTableTitles>
                    
                    <PreviousSlotsTableData>
                        {previousSlots.map(obj=><PreviousSlotsTableRow key={obj.date}>
                                                    <Typo14DarkBlueGreyHKGroteskRegular>
                                                        {obj.date}
                                                    </Typo14DarkBlueGreyHKGroteskRegular>
                                                    <Typo14DarkBlueGreyHKGroteskRegular>
                                                        {obj.startTime+" - "+obj.endTime}
                                                    </Typo14DarkBlueGreyHKGroteskRegular>
                                                    <Typo14DarkBlueGreyHKGroteskRegular>
                                                        {obj.washingMachineId}
                                                    </Typo14DarkBlueGreyHKGroteskRegular>
                                                </PreviousSlotsTableRow>)}
                                                
                    </PreviousSlotsTableData>
                </PreviousSlotsContainer>
    }
}

export default PreviousSlots;
