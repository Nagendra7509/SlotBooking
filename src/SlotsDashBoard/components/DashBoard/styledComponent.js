import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { colors } from '../../themes/Colors';


const DashBoardContainer = styled.div `
    ${tw ``} `;

const AvailableSlotsText = styled.span `
${tw `w-1/3 mt-10`}
  font-size: 20px;
  font-weight: 600;
  text-align:center;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color:${colors.darkBlueGrey};`;

const Dates = styled.div ``;

const DateBtn = styled.button `  
${tw `rounded m-2 p-2 focus:outline-none`}
    border-radius: 4px;
    box-shadow: 0 8px 16px 0 rgba(23, 31, 70, 0.08);
    background-color: ${props=>props.click?colors.coolGrey:colors.white}`;


const SlotTimings = styled.div `
    ${tw `w-4/5 p-4 border relative`}
    background-color:${colors.paleGrey}`;

const TimeBtn = styled.button `
    ${tw `m-2 p-2 rounded hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300`}
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  border: solid 1px ${colors.lightBlueGrey};
  opacity:${props=>props.opacityValue?0.5:1};
  background-color:${props=>props.opacityValue?colors.paleGrey:"white"};
  letter-spacing: normal;
  color: ${colors.darkBlueGrey};`;

const SlotsDateAndTime = styled.div `
    ${tw `flex flex-col  m-6`}`;

const Legend = styled.div `
    ${tw `flex justify-end flex-wrap `}`;

const ConfirmBtn = styled.button `
    ${tw `rounded px-4 py-2 `}
    border-radius: 4px;
    color:white;
  background-color: ${colors.greenishTeal};`;

const TimeBtns = styled.div `
    ${tw `p-10`}`;

const AvailableSlots = styled.div `
    ${tw `flex mt-10`}`;

const ConfirmBtnContainer = styled.div ` 
${tw `flex justify-end items-baseline mx-10`}`;

const SlotsUnAvailable = styled.div `${tw `absolute inset-0`}
    
    border:2px solid red;
    font-size: 24px;
    font-weight: 600;
    color: ${colors.darkBlueGrey};`;


export {
    DashBoardContainer,
    AvailableSlotsText,
    Dates,
    DateBtn,
    SlotTimings,
    TimeBtn,
    SlotsDateAndTime,
    Legend,
    ConfirmBtn,
    TimeBtns,
    ConfirmBtnContainer,
    SlotsUnAvailable,
    AvailableSlots
};


//visibility:${props=>props.visibilityValue?"visible":"hidden"};
