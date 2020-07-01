import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../themes/Colors'
import { boolean } from '@storybook/addon-knobs'

const DashBoardContainer = styled.div`
   ${tw``}
`

const AvailableSlotsText = styled.span`
   ${tw`w-1/5 mt-10`}
   font-size: 20px;
   font-weight: 600;
   text-align: center;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.6;
   letter-spacing: normal;
   color: ${colors.darkBlueGrey};
`

const Dates = styled.div``
interface DateBtnProps {
   click: boolean
}
const DateBtn = styled.button<DateBtnProps>`
   ${tw`rounded m-2 p-2 focus:outline-none`}
   border-radius: 4px;
   box-shadow: 0 8px 16px 0 rgba(23, 31, 70, 0.08);
   background-color: ${props => (props.click ? colors.coolGrey : colors.white)};
`

const SlotTimings = styled.div`
    ${tw` p-10 relative`}
    background-color:${colors.paleGrey}`

interface TimeBtnProps {
   opacityValue: boolean
}

const TimeBtn = styled.button<TimeBtnProps>`
   ${tw`m-2 p-2 rounded hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300`}
   font-size: 16px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.5;
   border: solid 1px ${colors.lightBlueGrey};
   opacity: ${props => (props.opacityValue ? 1 : 0.5)};
   background-color: ${props =>
      props.opacityValue ? 'white' : colors.paleGrey};
   letter-spacing: normal;
   color: ${colors.darkBlueGrey};
`

const SlotsDateAndTime = styled.div`
   ${tw`flex flex-col  m-6 w-3/5`}
`

const Legend = styled.div`
   ${tw`flex justify-end flex-wrap `}
`

const ConfirmBtn = styled.button`
   ${tw`rounded px-4 py-2 `}
   border-radius: 4px;
   color: white;
   background-color: ${colors.greenishTeal};
`

const TimeBtns = styled.div`
   ${tw`p-5`}
`

const AvailableSlots = styled.div`
   ${tw`flex mt-10`}
`

const ConfirmBtnContainer = styled.div`
   ${tw`flex justify-end items-baseline mx-10`}
`

const SlotsUnAvailable = styled.div`
   ${tw`absolute inset-0 flex justify-center pt-40`}
   background-color:black;
   opacity: 0.5;
   font-size: 24px;
   font-weight: 600;

   color: white;
`
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
}
