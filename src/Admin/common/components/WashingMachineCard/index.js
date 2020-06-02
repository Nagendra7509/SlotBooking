import React from "react";
import { washingMachineUrls } from "../../../assets";
import { observable } from "mobx";



class WashingMachineCard extends React.Component {

    render() {

        const washingMachinesUrls = [...washingMachineUrls];


        return (

            <WashingMachineCardContainer>
                <WashingMachineImg 
                    src={washingMachinesUrls[Math.floor(Math.random() * (5 + 0 + 1))]} 
                    alt={"WashingMachineImg"}
                />        
            
            </WashingMachineCardContainer>

        );


    }
}


export default WashingMachineCard;
