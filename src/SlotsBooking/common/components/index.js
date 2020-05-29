import React from "react";
import { NavItem, TimeBtn, Time } from "./styledComponent";


export const NavBarItem = props => <NavItem colorValue={props.colorValue} onClick={props.onClickPage}>{props.children}</NavItem>;
export const TimeButton = props => <TimeBtn><Time>{props.children}</Time></TimeBtn>;
