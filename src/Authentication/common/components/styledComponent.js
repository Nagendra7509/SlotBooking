import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../themes/Colors'

const InputField = styled.input `
   ${tw`focus:outline-none`}
   width: 320px;
   height: 40px;
   border-radius: 2px;

   margin: 10px 108px 15px 108px;
   background-color: white;
   border: 1px solid #7e858e;
`;

const IbHubsLogoImg = styled.img `
   width: 90px;
   height: 90px;
   margin: 24px 223px 0px 223px;
   object-fit: contain;
`;



export { InputField, IbHubsLogoImg };
