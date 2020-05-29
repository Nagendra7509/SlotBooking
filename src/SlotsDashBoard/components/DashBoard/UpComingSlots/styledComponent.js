import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { colors } from '../../../themes/Colors';

const UpComingSlotsContainer = styled.div `
    ${tw `flex mt-10 mb-10`}`;
const UpComomingSlotText = styled.span `
    ${tw `w-1/5 mt-2`}
    font-size: 20px;
  font-weight: 600;
  text-align:center;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color:${colors.darkBlueGrey};`;

const DatesAndSlotsDetails = styled.div `

    ${tw `flex flex-col w-3/5`}
    
    background-color:${colors.paleGrey}`;

const TimeSlot = styled.span `${tw ``}
font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color:${colors.brightBlue};
`;
const Dates = styled.div ``;

const DateBtn = styled.button `
${tw `rounded m-2 p-2 focus:outline-none`}
    border-radius: 4px;
    box-shadow: 0 8px 16px 0 rgba(23, 31, 70, 0.08);
  background-color: ${props=>props.click?colors.coolGrey:colors.white}`;


const SlotsDetails = styled.div `
    ${tw `flex flex-col px-8 py-10 mx-6 rounded`}
    background-color:white;
    `;

const CancelBtnContainer = styled.div `
    ${tw `flex justify-end m-4`}`;
const CancelBtn = styled.button `
    ${tw `px-4 py-2`}
    border-radius: 4px;
    color:white;
  background-color:${colors.brightBlue};`;

const WashingMachineId = styled.span `${tw `mb-4`}
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color:${colors.brightBlue}`;

const NoBookingsContainer = styled.div `
    ${tw `flex items-center m-10 flex-col`}`;

const NoBookingImg = styled.img ``;

const DateAndSlots = styled.div `
    ${tw ``}`;

const NoBookingsYetText = styled.div `
    ${tw `flex justify-center mt-4 items-baseline `}
    font-size: 32px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;`;
const NotSymbolImg = styled.img `
    object-fit:contain;
    ${tw `ml-2`}`;

export {
    UpComingSlotsContainer,
    UpComomingSlotText,
    DatesAndSlotsDetails,
    Dates,
    DateBtn,
    SlotsDetails,
    CancelBtnContainer,
    CancelBtn,
    DateAndSlots,
    NoBookingsContainer,
    NoBookingImg,
    WashingMachineId,
    NotSymbolImg,
    NoBookingsYetText,
    TimeSlot
};
