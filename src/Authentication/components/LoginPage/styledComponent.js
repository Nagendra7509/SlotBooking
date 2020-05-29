import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import { colors } from '../../themes/Colors'

const LoginPageContainer = styled.div `
    ${tw`flex justify-center items-center h-screen `}
    background-color:${colors.iceBlue}`
const LoginForm = styled.form `
   ${tw`flex flex-col p-10 bg-white`}
   border-radius: 8px;
   background-color: ${colors.white};
`
const SigInText = styled.h2 `
   ${tw``}
   width: 214px;
   height: 80px;
   font-size: 32px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.25;
   margin: 24px 161px 30px 161px;
   letter-spacing: normal;
   text-align: center;
   color: ${colors.darkBlueGrey};
`
const SignInBtn = styled.button `
   ${tw`flex justify-center   text-white focus:outline-none cursor-pointer`}
   width: 320px;
   height: 40px;
   margin: 25px 108px 0px 108px;
   border-radius: 4px;
   background-color: ${colors.brightBlue};
`
const DontHaveAccount = styled.span `
   width: 200px;
   height: 24px;
   font-size: 14px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
   margin: 24px 168px 30px 168px;
   color: ${colors.darkBlueGrey};
`

const SignupLink = styled.a `
    ${tw``}
    color:${colors.brightBlue}`

export {
   LoginPageContainer,
   LoginForm,
   SigInText,
   SignInBtn,
   DontHaveAccount,
   SignupLink
}
