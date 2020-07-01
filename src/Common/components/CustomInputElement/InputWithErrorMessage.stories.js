import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import { InputWithErrorMessage } from './InputWithErrorMessage'
import { validatePassword } from '../../utils/ValidationUtils'

export default {
   component: InputWithErrorMessage,
   title: 'Common/InputWithErrorMessage',
   decorators: [withKnobs]
}

export const defaultView = () => (
   <InputWithErrorMessage type='password' placeholder='password' />
)

export const InputWithActions = () => (
   <InputWithErrorMessage
      type='password'
      placeholder='password'
      onChange={action('Changed ')}
      error={true}
      required={true}
      validatingFunction={validatePassword}
   />
)

export const placeholderText = () => (
   <InputWithErrorMessage
      type='password'
      placeholder={text('placeholder', 'password')}
   />
)
