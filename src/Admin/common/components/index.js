import React from 'react';
import { NavItem, StatusItem } from "./styledComponent";
export const SideNavItem = (props) => <NavItem href={props.href} onClick={props.onClick} isClicked={props.isClicked} id={props.id}>{props.children}</NavItem>
export const Status = props => <StatusItem href={props.href}>{props.children}</StatusItem>
