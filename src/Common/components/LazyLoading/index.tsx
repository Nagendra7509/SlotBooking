import React, { Component, lazy } from 'react'
import { ImageTag, LazyLoadingWrapper } from './styledComponents'

interface LazyLoadingProps {
   src: string
}

class LazyLoading extends Component<LazyLoadingProps> {
   render() {
      let count = 0
      const { src } = this.props
      console.log(count, 'LazyLoading')

      return (
         <ImageTag
            alt='something'
            loading='lazy'
            className='lazy'
            src={src}
            height='500'
            width='500'
         />
      )
   }
}

export default LazyLoading
