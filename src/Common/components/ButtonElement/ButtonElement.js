import React, { Component } from 'react'
import { Button, SecondaryButton, Round } from './styledComponents'
import { Type14NeonRedHKGroteskSemiBold } from '../../style_guide/Typos'

export function ButtonElement(props) {
   const { onClick, children } = this.props
   return <Button onClick={onClick} children={children} />
}
export function SecondaryButtonElement(props) {
   const { text } = props
   return (
      <SecondaryButton>
         <Type14NeonRedHKGroteskSemiBold>{text}</Type14NeonRedHKGroteskSemiBold>
      </SecondaryButton>
   )

   class RoundButtonComp extends Component {
      render() {
         return (
            <div>
               <Round>asdf</Round>
            </div>
         )
      }
   }

   export default RoundButtonComp
}
