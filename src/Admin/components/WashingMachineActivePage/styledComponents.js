import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { colors } from "../../themes/Colors";


const AddNewMachine = styled.div `
    ${tw `flex justify-end `}`

const WashingMachineActiveContainer = styled.div `
    ${tw `relative`}`;

const SideNavBarAndActiveMachines = styled.div `
    ${tw `flex`}`;

const ActiveMachines = styled.div `
    ${tw `flex flex-col w-full mt-10`}`;

const ActiveMachineCards = styled.div `
    ${tw `flex flex-wrap justify-around`}`;


export {
    AddNewMachine,
    WashingMachineActiveContainer,
    SideNavBarAndActiveMachines,
    ActiveMachines,
    ActiveMachineCards,
}
