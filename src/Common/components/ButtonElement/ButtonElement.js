import React, { Component } from 'react'
import { Button, SecondaryButton } from './styledComponents'
import { Type14NeonRedHKGroteskSemiBold } from '../../style_guide/Typos'

class ButtonElement extends Component {
   render() {
      const { onClick, children } = this.props
      return <Button onClick={onClick} children={children} />
   }
}
export { ButtonElement }

export function SecondaryButtonElement(props) {
   return (
      <SecondaryButton>
         <Type14NeonRedHKGroteskSemiBold>
            {props.text}
         </Type14NeonRedHKGroteskSemiBold>
      </SecondaryButton>
   )
}
