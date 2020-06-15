import React from 'react'
import { NavItem, StatusItem } from './styledComponent'
export const SideNavItem = props => (
   <NavItem href={props.href} path={props.path}>
      {props.children}
   </NavItem>
)
export const Status = props => (
   <StatusItem href={props.href} path={props.path}>
      {props.children}
   </StatusItem>
)
