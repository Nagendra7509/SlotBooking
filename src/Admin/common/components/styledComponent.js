import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { colors } from "../../themes/Colors";


const NavItem = styled.a `
  ${tw `p-10`}
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.12px;
  border-bottom:1px solid ${colors.lightBlueGrey};
  color:${props=>props.isClicked?colors.brightBlue:colors.darkBlueGrey};`;

const StatusItem = styled.a `  
    ${tw `px-4 py-2 hover:bg-blue-600 hover:text-white`}
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  border:2px solid ${colors.lightBlueGrey};
  line-height: 1.71;
  letter-spacing: normal;
  color:${colors.darkBlueGrey};`;


export {
    NavItem,
    StatusItem
}


//
