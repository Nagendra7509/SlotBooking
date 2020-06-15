import React from 'react'
import { NavItem, TimeBtn, Time, Heading } from './styledComponent'

export const NavBarItem = props => (
   <NavItem path={props.path} href={props.href}>
      {props.children}
   </NavItem>
)

export const TimeButton = props => (<TimeBtn>
                                       <Time>{props.children}</Time>
                                    </TimeBtn>)

export const PreviousSlotsHeading = props => <Heading>{props.children}</Heading>
