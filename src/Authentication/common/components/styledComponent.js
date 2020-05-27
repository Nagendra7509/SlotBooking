import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { colors } from "../../themes/Colors";


const InputField = styled.input `
    ${tw `focus:outline-none`}
    width: 320px;
    height: 40px;
    border-radius: 2px;
    
    margin:10px 108px 15px 108px;
    background-color:white;
    border:1px solid #7e858e`;
const InputLabel = styled.label `
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  margin:10px 108px 2px 108px;
  letter-spacing: 0.12px;
  
  color: #7e858e;`;

const IbHubsLogoImg = styled.img `
    width: 90px;
  height: 90px;
  margin:24px 223px 0px 223px;
  object-fit: contain;`;


const ErrorMessageShower = styled.span `
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  margin:0px 304px 0px 108px;
  letter-spacing: normal;
  color:${colors.neonRed}`;

export { InputField, InputLabel, IbHubsLogoImg, ErrorMessageShower };

//border: solid 1px #7e858e;
