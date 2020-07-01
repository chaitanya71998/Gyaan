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
   }
   onChangeInputText = event => {
      const inputValue = event.target.value
      const { onChange } = this.props
      this.emptyErrorMessage()
      onChange(inputValue)
   }
   onBlurElement = event => {
      const { validatingFunction } = this.props
      const inputValue = event.target.value
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
               onChange={this.onChangeInputText}
               placeholder={placeholder}
               onBlur={this.onBlurElement}
            />
            <Label>{this.errorMessage}</Label>
         </InputContainer>
      )
   }
}
export { InputWithErrorMessage }
