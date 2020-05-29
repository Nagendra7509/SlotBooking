import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { colors } from '../../../themes/Colors';

const LogoutBtn = styled.button `
    ${tw ` border-2 border-solid border-grey-200 px-4 py-2 `}
    border-radius: 4px;
  border: solid 1px ${colors.lightBlueGrey}`;

const ProfileViewContainer = styled.div `
    ${tw `flex justify-center mt-10`}`;


export {
    LogoutBtn,
    ProfileViewContainer
};
