import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../../themes/Colors'

const RequestsContainer = styled.div`
   ${tw`flex justify-center items-center h-screen`}
`

const RequestBox = styled.div`
   ${tw`w-2/5 h-2/3 rounded flex flex-col`}
   height:500px;
   border: 1px solid ${colors.lightBlueGrey};
   box-shadow: 0 8px 16px 0 rgba(23, 31, 70, 0.08);
`

const ReportIssueText = styled.span`
   font-size: 16px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;
   line-height: 1.5;
   margin: 30px 0px 50px 30px;
   letter-spacing: normal;
   color: ${colors.darkBlueGrey};
`

const DescriptionText = styled.span`
   font-size: 12px;
   font-weight: 500;
   font-stretch: normal;
   font-style: normal;
   line-height: 2;
   margin: 20px 0px 10px 40px;
   letter-spacing: 0.12px;
   color: ${colors.steel};
`

const ReportInputBox = styled.textarea`
   ${tw`mx-6 p-2`}
   height:200px;
   border-radius: 4px;
   border: solid 1px ${colors.lightBlueGrey};
   background-color: #ffffff;
`

const ReportBtn = styled.button`
  ${tw`px-4 py-4 m-auto text-white`}
  background-color:${colors.brightBlue}`

const ReportAnIssuePageAndNavBar = styled.div`
   ${tw`flex flex-col`}
`

export {
   RequestsContainer,
   RequestBox,
   ReportIssueText,
   DescriptionText,
   ReportInputBox,
   ReportBtn,
   ReportAnIssuePageAndNavBar
}
