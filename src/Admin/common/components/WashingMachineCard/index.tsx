import React from 'react'
import { washingMachineUrls } from '../../../assets'
import { activeAndInactive } from '../../../i18n/strings.json'
import {
   WashingMachineCardContainer,
   WashingMachineImg,
   WashingMachineDetails,
   WashingMachineCardId,
   UpdateAndStatus,
   SelectTag,
   Option,
   Status
} from './styledComponents'

type WashingMachineCardProps={
   washingMachineId:string,
   washingMachineStatus:string,
   onClickUpdate:(event:React.MouseEvent<HTMLSelectElement>)=>void,
   onClickActiveOrInactiveStatus:(event:React.MouseEvent<HTMLButtonElement>)=>void

}



class WashingMachineCard extends React.Component<WashingMachineCardProps> {
   render() {
      const washingMachinesUrls = [...washingMachineUrls]
      const {
         washingMachineId,
         washingMachineStatus,
         onClickUpdate,
         onClickActiveOrInactiveStatus
      } = this.props
      const {
         washingMachineID,
         updateSlots,
         markAsInactive,
         markAsActive,
         allocatedSlots
      } = activeAndInactive

      return (
         <WashingMachineCardContainer>
            <WashingMachineImg
               src={
                  washingMachinesUrls[Math.floor(Math.random() * (5 + 0 + 1))]
               }
               alt={'WashingMachineImg'}
            />

            <WashingMachineDetails>
               <WashingMachineCardId>
                  {washingMachineID}
                  {washingMachineId}
               </WashingMachineCardId>

               <UpdateAndStatus>
                  <SelectTag onClick={onClickUpdate} id={washingMachineId}>
                     <Option value={updateSlots}>{updateSlots}</Option>
                     <Option value={allocatedSlots}>{allocatedSlots}</Option>
                  </SelectTag>

                  <Status
                     id={washingMachineId}
                     onClick={onClickActiveOrInactiveStatus}
                  >
                     {washingMachineStatus == 'ACTIVE'
                        ? markAsInactive
                        : markAsActive}
                  </Status>
               </UpdateAndStatus>
            </WashingMachineDetails>
         </WashingMachineCardContainer>
      )
   }
}

export default WashingMachineCard
