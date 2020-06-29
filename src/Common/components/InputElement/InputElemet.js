import React, { Component } from 'react'
import { Input } from './styledComponents'

class InputElement extends Component {
   render() {
      const {
         value,
         type,
         required,
         onChange,
         isCorrect,
         validatingFunction
      } = this.props
      return (
         <Input
            required={required}
            value={value}
            type={type}
            onChange={onChange}
            onBlur={validatingFunction}
            error={isCorrect}
         />
      )
   }
}
export { InputElement }
