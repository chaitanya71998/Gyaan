import styled from '@emotion/styled'
import { colors } from '../../../Common/style_guide/themes/Colors'

const { neon_red_5, neon_red, steel, white } = colors
export const Input = styled.input`
   margin-top: 8px;
   margin-bottom: 24px;
   width: 320px;
   height: 40px;
   border-radius: 2px;
   border: solid 1px ${props => (props.error ? neon_red : steel)};
   background-color: ${props => (props.error ? neon_red_5 : white)};
   padding-left:4px;
`
