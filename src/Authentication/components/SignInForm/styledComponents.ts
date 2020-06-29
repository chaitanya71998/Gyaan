import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import { colors } from '../../../Common/style_guide/themes/Colors'
import { Typo12NeonRedHKGroteskRegular } from '../../../Common/style_guide/Typos'

const { bright_blue, white, ice_blue } = colors

export const SignInButton = styled.button`
   width: 320px;
   height: 40px;
   border-radius: 4px;
   background-color: ${bright_blue};
   margin-top: 24px;
   margin-bottom: 24px;
   color: ${white};
`
export const Div = styled.div`
   width: 536px;
   border-radius: 8px;
   background-color: ${white};
   ${tw`flex flex-col border justify-center py-8 items-center`}
`

export const Warning = styled.p`
   ${tw`text-red-800 text-xs`}
`

export const SignUpText = styled.p``

export const SignUpLink = styled.a`
   color: ${bright_blue};
`

export const Form = styled.form`
   ${tw`flex flex-col justify-center  `}
`
export const ErrorMessage = styled(Typo12NeonRedHKGroteskRegular)`
   width: 320px;
`
export const SignInBlock = styled.div`
${tw`flex h-screen justify-center items-center  `}
background-color: ${ice_blue}`
