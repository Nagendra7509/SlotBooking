import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { colors } from "../../../themes/Colors";


const NavBarContainer = styled.div `
    ${tw `flex justify-between`}
    border-bottom:1px solid ${colors.lightBlueGrey}`;

const IbHubsLogo = styled.img `
    object-fit:contain`;

const NavItems = styled.div `
    ${tw `flex items-center`}`;

const NavItem = styled.img `
object-fit:contain`;

const Profile = styled.a `
    ${tw `px-4`}
    font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: ${props=>props.href===props.path?"black":colors.steel60};`;

export {
    NavBarContainer,
    IbHubsLogo,
    NavItems,
    NavItem,
    Profile
}
