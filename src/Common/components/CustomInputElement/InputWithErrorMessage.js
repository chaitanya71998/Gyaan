import React, { Component } from 'react'
import { Input, Label } from './styledComponents'

class InputElement extends Component {
   validateValue = event => {
      const {
         value,
         type,
         required,
         onChange,
         isCorrect,
         validatingFunction
      } = this.props
   }

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
         <>
            <Input
               required={required}
               value={value}
               type={type}
               onChange={onChange}
               onBlur={validatingFunction}
               error={isCorrect}
            />
            <Label>{validateFunction.errormessage}</Label>
         </>
      )
   }
}
export { InputElement }
