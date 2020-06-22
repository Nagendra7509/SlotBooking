import React from 'react'
import { InputField, IbHubsLogoImg } from './styledComponents'






export const InputTag = props => (
   <InputField
      borderValue={props.borderValue}
      onChange={props.onChange}
      defaultValue={props.value}
      type={props.type}
      placeholder={props.placeholder}
   />
)
export const IbHubsLogo = props => (
   <IbHubsLogoImg src={props.src} alt={props.alt} />
)
