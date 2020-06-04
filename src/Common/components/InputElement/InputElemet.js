import React, { Component } from 'react'
import { Input } from './styledComponents'

class InputElement extends Component {
   render() {
      const { value, type, onChange, isCorrect } = this.props
      return (
         <Input
            value={value}
            type={type}
            onChange={onChange}
            error={isCorrect}
         />
      )
   }
}
export { InputElement }
