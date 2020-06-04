import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const ProfilePageContainer = styled.div ``;

const SideNavBarAndProfile = styled.div `
    ${tw `flex`}`;

const LogOutBtnContainer = styled.div ``;

const LogOutBtn = styled.button `
    ${tw `border-2 border-solid border-green-600`}`;

export {
    ProfilePageContainer,
    SideNavBarAndProfile,
    LogOutBtnContainer,
    LogOutBtn
}
