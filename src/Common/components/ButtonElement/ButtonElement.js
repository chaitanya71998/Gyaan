import React, { Component } from 'react'
import { Button, SecondaryButton } from './styledComponents'
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
}
