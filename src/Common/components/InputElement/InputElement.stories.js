import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import '../../../styles/tailwind.css'
import { InputElement } from './InputElemet'

export default {
    component: InputElement,
    title: 'Common/InputElement',
    decorators: [withKnobs]
}

export const defaultView = () => <InputElement />

export const InputElementWithActions = () => (
    <InputElement
     
       type='password'
       onChange={action('Changed ')}
       onBlur ={action('blur ')}
       error={true}
    />
)

export const knobs = () => (
    <InputElement 
    value={text('value', 'password')} 
    type='password'
    />
)

knobs.story = {
    decorators: [withKnobs]
}
