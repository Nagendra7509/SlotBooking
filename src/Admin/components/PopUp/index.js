import React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { popUp } from "../../i18n/strings.json";
import {
    PopUpContainer,
    WashingMachineImg,
    PopUprightpartContainer,
    CloseImgBtn,
    WashingMachineId,
    InputTag,
    AddButton,
    PopUpDetails
}
from "./styledComponents";

@observer
class PopUp extends React.Component {

    @observable washingMachineNumber = "";

    onChangeInput = (event) => {
        this.washingMachineNumber = event.target.value;
    }

    onClickAddNewWashingMachine = () => {
        const { onClickNewWashingMachine } = this.props;
        onClickNewWashingMachine(this.washingMachineNumber);
    }


    render() {

        const { onClickAddMachine } = this.props;
        const imgUrl = "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/64d94196-a381-46e6-b8b5-ef5d8393ff6d.png"
        const closeImgUrl = "https://cdn.zeplin.io/5d0afc9102b7fa56760995cc/assets/ebd322ba-cb93-4f1d-b678-03b4b2c15328.svg"
        const { washingMachineID, add } = popUp;


        return <PopUpContainer>
        
                    <PopUpDetails>
                    
                        <WashingMachineImg src={imgUrl} alt={"WashingMachine"}/>
                        
                        <PopUprightpartContainer>
                        
                            <CloseImgBtn src={closeImgUrl} alt={"close"} onClick={onClickAddMachine}/>
                            <WashingMachineId>{washingMachineID}</WashingMachineId>
                            <InputTag type="text"  value={this.washingMachineNumber} onChange={this.onChangeInput}/>
                            <AddButton onClick={this.onClickAddNewWashingMachine}>{add}</AddButton>
                        
                        
                        </PopUprightpartContainer>
                    
                    </PopUpDetails>
                
                </PopUpContainer>

    }
}


export default PopUp;
