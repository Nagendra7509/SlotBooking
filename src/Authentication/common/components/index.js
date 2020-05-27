import React from "react";
import { InputField, InputLabel, IbHubsLogoImg, ErrorMessageShower } from "./styledComponent";


export const InputTag = (props) => (<InputField 
                                        error={props.error} 
                                        onChange={props.onChange} 
                                        defaultValue={props.value} 
                                        type={props.type} 
                                        placeholder={props.placeholder}/>);
export const Label = (props) => <InputLabel>{props.children}</InputLabel>;
export const IbHubsLogo = (props) => <IbHubsLogoImg src={props.src} alt={props.alt}/>
export const ErrorMessage = (props) => <ErrorMessageShower>{props.children}</ErrorMessageShower>;
