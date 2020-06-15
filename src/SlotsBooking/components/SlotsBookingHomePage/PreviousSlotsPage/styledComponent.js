import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../../themes/Colors'

const PreviousSlotsContainer = styled.div`
   ${tw`mt-10`}
`

const PreviousSlotsTableTitles = styled.div`
    ${tw`flex justify-around mx-10 p-4 rounded`}
    border: solid 1px ${colors.lightBlueGrey};`

const PreviousSlotsTableData = styled.div``

const PreviousSlotsTableRow = styled.div`
    ${tw`flex justify-around mx-10 p-4`}
    border: solid 1px ${colors.lightBlueGrey}`

const PreviousSlotsAndNavBar = styled.div`
   ${tw`flex flex-col`}
`

export {
   PreviousSlotsContainer,
   PreviousSlotsTableTitles,
   PreviousSlotsTableData,
   PreviousSlotsTableRow,
   PreviousSlotsAndNavBar
}
