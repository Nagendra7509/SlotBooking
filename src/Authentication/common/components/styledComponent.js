import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../themes/Colors.js';

const InputField = styled.input `
   ${tw`focus:outline-none`}
   width: 320px;
   height: 40px;
   margin: 10px 80px 15px 80px;
   border-radius: 2px;
   background-color: white;
   border: 1px solid ${props=>props.borderValue?colors.neonRed:"#7e858e"};`;

const IbHubsLogoImg = styled.img `
   
   object-fit: contain;`;



export { InputField, IbHubsLogoImg };


//logo
//margin: 24px 223px 0px 223px;
//width: 90px;
//height: 90px;


//Input
//margin: 10px 108px 15px 108px;
//m-auto my-4
//focus:outline-none
