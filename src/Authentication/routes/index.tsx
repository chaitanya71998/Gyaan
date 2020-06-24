import React from "react";
import { Route } from 'react-router-dom';

import { paths } from "../../Common/constants/NavigationConstants"

import { SignInRoute } from './SignInRoute'

const { signInForm } = paths

export const authenticationRoute = [
    <Route key={ signInForm } path = { signInForm }component = { SignInRoute }/>
]