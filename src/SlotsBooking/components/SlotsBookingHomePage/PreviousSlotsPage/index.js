import React from "react";
import { observer, inject } from "mobx-react";
import { Typo14DarkBlueGreyHKGroteskRegular } from "../../../../styleGuide/Typos";
import Strings from "../../../i18n/strings.json";
import { PreviousSlotsHeading } from "../../../common/components";
import NavigationBar from "../../../common/components/NavigationBar";
import {
    PreviousSlotsContainer,
    PreviousSlotsTableTitles,
    PreviousSlotsTableData,
    PreviousSlotsTableRow,
    PreviousSlotsAndNavBar
}
from "./styledComponent";

@inject('slotsDashBoardStore')

@observer
class PreviousSlots extends React.Component {


    componentDidMount() {
        this.props.slotsDashBoardStore.getSlotsData();
    }

    render() {

        const { previousSlots } = this.props.slotsDashBoardStore;
        const { date, time, washingMachineId } = Strings.previousSlots;

        return <PreviousSlotsAndNavBar>
        
                    <NavigationBar/>
                    
                    <PreviousSlotsContainer>
            
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
                    
                </PreviousSlotsAndNavBar>
    }
}

export default PreviousSlots;
