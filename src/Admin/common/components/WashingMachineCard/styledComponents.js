import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../../themes/Colors'

const WashingMachineCardContainer = styled.div`
   ${tw`flex flex-col m-4 py-4 `}
   width:300px;
   border: 1px solid ${colors.lightBlueGrey};
`

const WashingMachineImg = styled.img`
   ${tw`m-auto mb-4`}
   width:80%;
   object-fit: contain;
`

const WashingMachineDetails = styled.div`
   ${tw`flex flex-col`}
`

const WashingMachineCardId = styled.p`
   ${tw`mx-6 my-4`}
`

const UpdateAndStatus = styled.div`
   ${tw`flex justify-around items-center`}
`

const SelectTag = styled.select`
   ${tw`px-4 py-2`}
   background-color:white;
   border: 1px solid ${colors.lightBlueGrey};
`

const Option = styled.option``

const Status = styled.button`
   ${tw`cursor-pointer`}
   font-size: 14px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
   color: ${colors.brightBlue};
`

export {
   WashingMachineCardContainer,
   WashingMachineImg,
   WashingMachineDetails,
   WashingMachineCardId,
   UpdateAndStatus,
   SelectTag,
   Option,
   Status
}
