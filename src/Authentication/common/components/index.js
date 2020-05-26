import React from "react";
import { InputField, InputLabel, IbHubsLogoImg } from "./styledComponent";


export const InputTag = (props) => (<InputField onChange={props.onChange} value={props.value} type={props.type} placeholder={props.placeholder}/>);
export const Label = (props) => <InputLabel>{props.children}</InputLabel>;
export const IbHubsLogo = (props) => <IbHubsLogoImg src={props.src}/>
