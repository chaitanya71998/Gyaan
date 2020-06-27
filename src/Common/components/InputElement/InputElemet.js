import React, { Component } from 'react'
import { Input } from './styledComponents'

class InputElement extends Component {
   render() {
      const { value, type, onChange, isCorrect,validatingFunction } = this.props
      return (
         <Input
            value={value}
            type={type}
            onChange={onChange}
            onBlur ={validatingFunction}
            error={isCorrect}
         />
      )
   }
}
export { InputElement }
