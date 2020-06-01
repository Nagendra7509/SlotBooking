import styled from '@emotion/styled';
import tw from 'tailwind.macro';

const NavBar = styled.div `
    ${tw ``}
    box-shadow: 0 8px 16px 0 rgba(23, 31, 70, 0.08);
    background-color: #ffffff;`;

const Logo = styled.div `
    ${tw `sm:w-1/5 lg:w-1/2  `}`;

const IbHubsLogo = styled.img `
    object-fit:contain;`;

const NavItems = styled.div `
    ${tw `flex justify-around sm:w-full lg:w-1/2 items-center flex-wrap	 `}`;

const ProfileImg = styled.img `
${tw `flex-center cursor-pointer`}`;

const TopPart = styled.div `
    ${tw `flex items-center`}`;

const BottomPart = styled.div `
    ${tw `text-right mx-4 p-2`}`;


export {
    NavBar,
    Logo,
    IbHubsLogo,
    NavItems,
    ProfileImg,
    TopPart,
    BottomPart
}
