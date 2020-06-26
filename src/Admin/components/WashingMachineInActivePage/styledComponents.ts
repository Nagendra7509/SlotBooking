import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const AddNewMachine = styled.div`
   ${tw`flex justify-end `}
`

const WashingMachineInActiveContainer = styled.div`
   ${tw`relative`}
`

const SideNavBarAndInActiveMachines = styled.div`
   ${tw`flex`}
`

const InActiveMachines = styled.div`
   ${tw`flex flex-col w-full mt-10`}
`

const InActiveMachineCards = styled.div`
   ${tw`flex flex-wrap justify-around`}
`

export {
   AddNewMachine,
   WashingMachineInActiveContainer,
   SideNavBarAndInActiveMachines,
   InActiveMachines,
   InActiveMachineCards
}
