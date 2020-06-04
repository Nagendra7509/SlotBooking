import React from "react";
import { observer, inject } from "mobx-react";
import SideNavBar from "../../common/components/SideNavBar";
import TopNavBar from "../../common/components/TopNavBar";
import { updateSlots } from "../../i18n/strings.json";
import {
    UpDateSlotContainer,
    SideNavBarAndSlotsDetails,
    SlotDetailsContainer,
    Header,
    WashingMachineId,
    DayContainer,
    ArrowBtn,
    Day,
    UpdateSlotsTable,
    TableTitles,
    SlotsHeading,
    FromHeading,
    ToHeading,
    SlotDetails,
    SlotNumber,
    FromTime,
    ToTime,
    CloseImgBtn,
    Delete,
    FromTimeContainer,
    SelectTag,
    Option,
    ToContainer,
    Footer,
    AddNewSlot,
    UpdateBtn
}
from "./styledComponents";


@inject('adminStore')
@observer
class UpdateWashingSlotsDetails extends React.Component {

    constructor(props) {
        super(props);
        this.getUpdateSlotsData();

    }



    getUpdateSlotsData = async() => {
        const { getAdminResponse, onClickUpdateInWashingMachineCard } = this.props.adminStore;
        await getAdminResponse();
        const { history } = this.props;
        const machineId = history.location.pathname.split('/')
        //console.log([], "history");
        await onClickUpdateInWashingMachineCard(machineId[machineId.length - 1]);
    }

    onClickCloseBtn = (event) => {
        const { onClickCloseBtn } = this.props.adminStore;
        //alert(event.target.id)
        onClickCloseBtn(event.target.id);
    }

    onClickAddNewSlot = () => {
        const { onClickAddNewSlot } = this.props.adminStore;
        onClickAddNewSlot();
    }

    render() {

        const { updateSlotsResponse } = this.props.adminStore;
        const {
            washingMachineID,
            slots,
            from,
            to,
            slot,
            am,
            pm,
            addSlots,
            update
        } = updateSlots;
        const closeImgUrl = "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/7da0927e-32b7-480f-a4bc-e513c0df41dd.svg";

        return <UpDateSlotContainer>
                    <TopNavBar/>
                    
                    <SideNavBarAndSlotsDetails>
                        
                        <SideNavBar/>
                        <SlotDetailsContainer >
                            <Header>
                            
                                <WashingMachineId>{washingMachineID} {updateSlotsResponse.washingMachineId}</WashingMachineId>
                            
                                <DayContainer>
                                    <ArrowBtn>{"<"}</ArrowBtn>
                                    <Day>{updateSlotsResponse.day}</Day>
                                    <ArrowBtn>{">"}</ArrowBtn>
                                </DayContainer>
                            
                            </Header>
                            <UpdateSlotsTable>
                                {(updateSlotsResponse.timeSlots ) && 
                                        <TableTitles>
                                            <SlotsHeading>{slots}</SlotsHeading>
                                            <FromHeading>{from}</FromHeading>
                                            <ToHeading>{to}</ToHeading>
                                            <Delete>Delete</Delete>
                                        </TableTitles>
                                }
                                {(updateSlotsResponse.timeSlots) && 
                                    updateSlotsResponse.timeSlots.map((obj,index)=>
                                            <SlotDetails key={obj.startTime}>
                                                <SlotNumber>{slot} {index+1}</SlotNumber>
                                                <FromTimeContainer>
                                                    <FromTime>{obj.startTime}</FromTime>
                                                    <SelectTag  id={obj.startTime}>
                                                        <Option hidden={true} ></Option>
                                                        <Option value={am}>{am}</Option>
                                                        <Option value={pm}>{pm}</Option>
                                                    </SelectTag>
                                                </FromTimeContainer>
                                                <ToContainer>
                                                    <ToTime>{obj.endTime}</ToTime>
                                                    <SelectTag  id={obj.endTime}>
                                                        <Option hidden={true} ></Option>
                                                        <Option value={am}>{am}</Option>
                                                        <Option value={pm}>{pm}</Option>
                                                    </SelectTag>
                                                </ToContainer>
                                                
                                                <CloseImgBtn 
                                                    id={obj.startTime}
                                                    onClick={this.onClickCloseBtn} 
                                                    src={closeImgUrl} 
                                                    alt={"close"}
                                                />
                                            </SlotDetails>
                                        )
                                }
                            
                        
                            </UpdateSlotsTable>
                            <Footer>
                            <AddNewSlot onClick={this.onClickAddNewSlot}>{addSlots}</AddNewSlot>
                            <UpdateBtn>{update}</UpdateBtn>
                        </Footer>
                        
                        </SlotDetailsContainer>
                        
                        
                
                    </SideNavBarAndSlotsDetails>
                    

                </UpDateSlotContainer>
    }
}

export default UpdateWashingSlotsDetails;
