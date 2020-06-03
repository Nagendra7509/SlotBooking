import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { colors } from "../../../themes/Colors";


const WashingMachineCardContainer = styled.div `
    ${tw `flex flex-col m-4 py-4`}
    border:1px solid ${colors.lightBlueGrey}`;

const WashingMachineImg = styled.img `
    ${tw `m-auto`}
    width:70%;
    object-fit:contain`;

const WashingMachineDetails = styled.div `
    ${tw `flex flex-col`}`;

const WashingMachineCardId = styled.p `
    ${tw `mx-6 my-2`}
    `;

const UpdateAndStatus = styled.div `
    ${tw `flex justify-around`}`;

const SelectTag = styled.select `
background-color:white;
border:1px solid ${colors.lightBlueGrey}`;

const Option = styled.option ``;

const Status = styled.p `
    ${tw `cursor-pointer`}
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  color:${colors.brightBlue};
    `;


export {
    WashingMachineCardContainer,
    WashingMachineImg,
    WashingMachineDetails,
    WashingMachineCardId,
    UpdateAndStatus,
    SelectTag,
    Option,
    Status
};
