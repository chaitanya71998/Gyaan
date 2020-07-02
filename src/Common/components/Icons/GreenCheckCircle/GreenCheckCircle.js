import * as React from 'react'

function GreenCheckCirele(props) {
   return (
      <svg {...props} width={24} height={24} fill='none' viewBox='0 0 24 24'>
         <rect
            width={22.5}
            height={22.5}
            x={0.75}
            y={0.75}
            fill='#2DCA73'
            stroke='#fff'
            strokeWidth={1.5}
            rx={11.25}
         />
         <path stroke='#fff' strokeWidth={1.5} d='M8 12.5l2.667 2.5L16 9' />
      </svg>
   )
}

export default GreenCheckCirele
