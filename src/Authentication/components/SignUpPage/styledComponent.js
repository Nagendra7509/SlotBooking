import styled from "@emotion/styled";
import tw from "tailwind.macro";
import { colors } from "../../themes/Colors";


//console.log(colors.darkBlueGrey);

const SignUpPageContainer = styled.div `
    ${tw `flex justify-center items-center h-screen `}
    background-color:${colors.iceBlue}`;
const SignUpForm = styled.form `
    ${tw `flex flex-col p-10 bg-white`}
  border-radius: 8px;
  background-color: ${colors.white};`;
const SignUpText = styled.h2 `
    ${tw ``}
    width: 347px;
  height: 40px;
  font-size: 32px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  margin:24px 104px 30px 85px;
  letter-spacing: normal;
  color:${colors.darkBlueGrey};`;
const SignUpBtn = styled.button `
    ${tw `flex justify-center   text-white focus:outline-none cursor-pointer`}
    width: 320px;
  height: 40px;
  margin:33px 108px 0px 108px;
  border-radius: 4px;
  background-color:${colors.brightBlue}`;



export {
    SignUpPageContainer,
    SignUpForm,
    SignUpText,
    SignUpBtn,
};
