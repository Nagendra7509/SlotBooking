import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../themes/Colors'

const SignUpPageContainer = styled.div`
    ${tw`flex justify-center items-center  min-h-screen`}
    background-color:${colors.iceBlue}`

const SignUpForm = styled.form`
   ${tw`flex flex-col justify-around bg-white`}
   border-radius: 8px;
   border: 2px solid ${colors.darkBlueGrey};
   box-shadow: 0 4px 8px 0 ${colors.darkBlueGrey};
   background-color: ${colors.white};
`

const SignUpText = styled.h2`
   ${tw`m-auto my-4`}
   font-size: 32px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.25;
   letter-spacing: normal;
   color: ${colors.darkBlueGrey};
`
const SignUpBtn = styled.button`
   ${tw`flex justify-center m-auto px-32 py-2 my-6 text-white focus:outline-none cursor-pointer`}
   height: 40px;

   border-radius: 4px;
   background-color: ${colors.brightBlue};
`

const AlreadyHaveAccount = styled.span`
   ${tw`m-auto mb-4 mt-2`}
   font-size: 14px;
   font-weight: normal;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.71;
   letter-spacing: normal;
   color: ${colors.darkBlueGrey};
`

const SignInLink = styled.a`
    ${tw``}
    color:${colors.brightBlue}`

export {
   SignUpPageContainer,
   SignUpForm,
   SignUpText,
   SignUpBtn,
   AlreadyHaveAccount,
   SignInLink
}
