import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../themes/Colors'

const NavItem = styled.a`
   ${tw`p-6`}
   font-size: 12px;
   font-weight: bold;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: 0.12px;
   border-bottom: 1px solid ${colors.lightBlueGrey};
   color: ${props =>
      props.path === props.href ? colors.brightBlue : colors.darkBlueGrey};
`

const StatusItem = styled.a`
   ${tw`px-4 py-2 `}
   font-size: 14px;
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   border: 1px solid ${colors.lightBlueGrey};
   line-height: 1.71;
   letter-spacing: normal;
   color: ${props =>
      props.path === props.href ? colors.white : colors.darkBlueGrey};
   background-color: ${props =>
      props.path === props.href ? colors.brightBlue : colors.white};
`

export { NavItem, StatusItem }
