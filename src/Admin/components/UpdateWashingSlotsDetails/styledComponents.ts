import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../themes/Colors'

const Header = styled.div`
   ${tw`flex justify-between mx-10 mt-4`}
`

const WashingMachineId = styled.p`
    ${tw`px-4 py-2`}
    border:1px solid ${colors.lightBlueGrey}`

const DayContainer = styled.div`
   ${tw`flex`}
`

const ArrowBtn = styled.button`
    ${tw`px-4 py-2`}
    border:1px solid ${colors.lightBlueGrey}`

const Day = styled.p`
    ${tw`px-4 py-2`}
    border:1px solid ${colors.lightBlueGrey}`

const UpdateSlotsTable = styled.div`
   ${tw`flex flex-col `}
`

const TableTitles = styled.div`
   ${tw`flex justify-around mx-10 py-4 mt-10`}
   font-size: 12px;
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: 0.12px;
   color: ${colors.brightBlue};
   border: 1px solid ${colors.lightBlueGrey};
`

const SlotsHeading = styled.p``

const FromHeading = styled.p``

const ToHeading = styled.p``

const SlotDetails = styled.div`
    ${tw`flex justify-around mx-10 py-4`}
    border:1px solid ${colors.lightBlueGrey}`

const SlotNumber = styled.p``

const FromTime = styled.p``

const ToTime = styled.p``

const CloseImgBtn = styled.img`
   object-fit: contain;
`

const Delete = styled.p``

const FromTimeContainer = styled.div`
    ${tw`flex px-2 py-1`}
    border:2px solid ${colors.lightBlueGrey}`

const SelectTag = styled.select`
   background-color: ${colors.white};
`

const Option = styled.option``

const ToContainer = styled.div`
    ${tw`flex px-2 py-1`}
    border:2px solid ${colors.lightBlueGrey};`

const UpDateSlotContainer = styled.div``

const SideNavBarAndSlotsDetails = styled.div`
   ${tw`flex`}
`

const SlotDetailsContainer = styled.div`
   ${tw`w-full`}
`

const Footer = styled.div`
   ${tw`flex justify-between mx-10 my-4`}
`

const AddNewSlot = styled.button`
   ${tw`px-4 py-2`}
   font-size: 14px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
   color: ${colors.steel};
`

const UpdateBtn = styled.button`
   ${tw`px-4 py-2`}
   font-size: 14px;
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
   color: ${colors.white};
   background-color: ${colors.brightBlue};
`

export {
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
   UpDateSlotContainer,
   SideNavBarAndSlotsDetails,
   SlotDetailsContainer,
   Footer,
   AddNewSlot,
   UpdateBtn
}
