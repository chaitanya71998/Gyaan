import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

import { Input, Label, InputContainer } from './styledComponents'
interface CustomInputElementProps {
   value: any
   type: any
   required: any
   onChange: any
   validatingFunction: any
   placeholder: any
}

@observer
class InputWithErrorMessage extends Component<CustomInputElementProps> {
   @observable hasError: false
   @observable errorMessage: string

   constructor(props) {
      super(props)
      this.hasError = false
      this.errorMessage = ''
   }
   @action.bound
   emptyErrorMessage() {
      this.errorMessage = ''
      this.hasError = false
   }
   onChangeInputText = event => {
      const inputValue = event.target.value
      const { onChange } = this.props
      this.emptyErrorMessage()
      onChange(inputValue)
   }
   onBlurElement = event => {
      const inputValue = event.target.value
      this.validateValue(inputValue)
   }
   validateValue = (inputValue: any) => {
      const { validatingFunction } = this.props

      const { hasError, errorMessage } = validatingFunction(inputValue)

      this.hasError = hasError
      this.errorMessage = errorMessage
   }
   render() {
      const { value, type, placeholder, required } = this.props
      return (
         <InputContainer>
            <Input
               value={value}
               type={type}
               required={required}
               placeholder={placeholder}
               onChange={this.onChangeInputText}
               onBlur={this.onBlurElement}
               error={this.hasError}
            />
            <Label>{this.errorMessage}</Label>
         </InputContainer>
      )
   }
}
export { InputWithErrorMessage }
// Type '{ value: any; type: any; required: any; placeholder: any; onChange: (event: any) => void; onBlur: (event: any) => void; error: false; }' is not assignable to type 'IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement> & Pick<...> & { ...; } & { ...; }'.
//   Property 'error' does not exist on type 'IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement> & Pick<...> & { ...; } & { ...; }'.umn": 21
// }
