import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../themes/Colors'

const NavItem = styled.a`
   ${tw`cursor-pointer  `}

   font-size: 18px;
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: ${props => (props.href === props.path ? 'black' : colors.steel60)};
`
const TimeBtn = styled.button`
   width: 170px;
   height: 44px;
   border-radius: 6px;
   border: solid 2px ${colors.brightBlue};
   background-color: #ffffff;
`

const Time = styled.span`
   width: 159px;
   height: 24px;
   font-size: 16px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.5;
   letter-spacing: normal;
   color: ${colors.darkBlueGrey};
`

const Heading = styled.span`
   font-size: 12px;
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: 0.12px;
   color: ${colors.brightBlue};
`

export { NavItem, TimeBtn, Time, Heading }
