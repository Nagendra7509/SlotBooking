import * as React from 'react'

function SvgComponent(props) {
   return (
      <svg width={20} height={20} fill='none' viewBox='0 0 20 20' {...props}>
         <path
            fill='#171F46'
            fillRule='evenodd'
            d='M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10zM10 3.75c-.682 0-1.227.567-1.2 1.249l.225 5.627a.976.976 0 001.95 0l.225-5.627A1.201 1.201 0 0010 3.75zM8.563 14.531a1.407 1.407 0 112.813.001 1.407 1.407 0 01-2.813-.001z'
            clipRule='evenodd'
         />
      </svg>
   )
}

export default SvgComponent
