import React, { Component } from 'react'

class SvgComponentForNotIcon extends Component {
   render() {
      const { renderComponent: RenderComponent } = this.props
      return (
         <span>
            <RenderComponent />
         </span>
      )
   }
}

export default SvgComponentForNotIcon
