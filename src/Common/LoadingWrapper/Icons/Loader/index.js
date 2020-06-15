import React, { Component } from 'react'
import SvgComponent from '../../SvgComponent'
import SvgFile from './SvgFile'

class Loader extends Component {
   render() {
      return (
         <SvgComponent
            className='ml-40'
            renderComponent={SvgFile}
            {...this.props}
         />
      )
   }
}

export default Loader
