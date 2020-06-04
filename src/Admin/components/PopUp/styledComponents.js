import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { colors } from "../../themes/Colors";


const PopUpContainer = styled.div `
    ${tw `flex justify-center items-center h-screen absolute  inset-0`}`;

const WashingMachineImg = styled.img `
    object-fit:contain;
    ${tw `w-2/5`}`;

const PopUprightpartContainer = styled.div `
    ${tw `flex flex-col `}
    width:60%;`;

const CloseImgBtn = styled.img `
    ${tw `ml-auto`}`;

const WashingMachineId = styled.p `
  ${tw `mx-auto mt-10`}
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color:${colors.darkBlueGrey};
    `;

const InputTag = styled.input `
    ${tw `mx-auto mt-10`}
    width:40%;
    border:2px solid ${colors.lightBlueGrey}`;

const AddButton = styled.button `
    ${tw `mt-10 mx-auto px-4 py-2 rounded`}
    width:30%;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  background-color:${colors.brightBlue};
  color: ${colors.white};    
    `;

const PopUpDetails = styled.div `
    ${tw `flex `}
    border:2px solid ${colors.lightBlueGrey};
    background-color:white;
    height:60%;
    width:60%;`;



export {
    PopUpContainer,
    WashingMachineImg,
    PopUprightpartContainer,
    CloseImgBtn,
    WashingMachineId,
    InputTag,
    PopUpDetails,
    AddButton
}
