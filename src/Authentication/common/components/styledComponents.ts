import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../themes/Colors'

type InputFieldProps = {
   borderValue: boolean
}

const InputField = styled.input`
   ${tw`focus:outline-none`}
   width: 320px;
   height: 40px;
   margin: 10px 80px 15px 80px;
   border-radius: 2px;
   background-color: white;
   border: 1px solid
      ${(props: InputFieldProps) =>
         props.borderValue ? colors.neonRed : '#7e858e'};
`

const IbHubsLogoImg = styled.img`
   object-fit: contain;
`

export { InputField, IbHubsLogoImg }
