import React from 'react'

import Loader from '../Icons/Loader'

import { LoadingViewContainer } from './styledComponents'
import { testIds } from '../../../Dashboard/constants/testIds'

const { loadingViewId } = testIds

class LoadingView extends React.Component {
   render() {
      return (
         <LoadingViewContainer data-testid={loadingViewId}>
            <Loader />
         </LoadingViewContainer>
      )
   }
}

export default LoadingView
