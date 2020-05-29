import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const Typo32DarkBlueGreyRubikRegular = styled.div `
   ${tw``}
   width: 347px;
   height: 40px;
   font-family: Rubik;
   font-size: 32px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.25;
   letter-spacing: normal;
   color: #171f46;
`;

const Typo12SteelHKGroteskSemiBold = styled.div `
   ${tw``}
   width: 63px;
   height: 16px;
   font-family: HKGrotesk;
   font-size: 12px;
   font-weight: 600;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: 0.12px;
   color: #7e858e;
`;

const Typo12NeonRedHKGroteskRegular = styled.span `
   ${tw``}
   width: 124px;
   height: 16px;
   font-family: HKGrotesk;
   font-size: 12px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.33;
   letter-spacing: normal;
   color: #ff0b37;
`;
const Typo14DarkBlueGreyHKGroteskRegular = styled.span `
   ${tw``}
   font-size: 14px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
   color: #171f46;
`;

const Typo12HKGroteskSemiBoldSteel = styled.label `
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.12px;
  margin: 10px 108px 2px 108px;
  color:#7e858e;`;


const Typo12HKGroteskRegular = styled.span `
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  margin: 0px 304px 0px 108px;
  line-height: 1.33;
  letter-spacing: normal;
  visibility:${props=>props.visibilityValue?"visible":"hidden"};
  color: #ff0b37;
   `;



export {
    Typo32DarkBlueGreyRubikRegular,
    Typo12SteelHKGroteskSemiBold,
    Typo12NeonRedHKGroteskRegular,
    Typo14DarkBlueGreyHKGroteskRegular,
    Typo12HKGroteskSemiBoldSteel,
    Typo12HKGroteskRegular
};
