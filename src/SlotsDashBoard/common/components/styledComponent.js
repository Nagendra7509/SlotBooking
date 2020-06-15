import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../themes/Colors'

const ColorBox = styled.div`
   ${tw`mx-2`}
   width:16px;
   height: 16px;
   border-radius: 2px;
   border: solid 1px ${colors.lightBlueGrey};
   background-color: ${props => props.colorValue};
`

const Text = styled.span``

const Color = styled.div`
   ${tw`flex items-center`}
`

export { ColorBox, Text, Color }
