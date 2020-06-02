import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { colors } from "../../../themes/Colors";

const SideNavBarContainer = styled.div `
    ${tw `flex flex-col w-1/5 h-screen`}
    border-right:1px solid ${colors.lightBlueGrey};`;

export {
    SideNavBarContainer
}
