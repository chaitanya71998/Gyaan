import React from 'react'
import { Prompt } from 'react-router-dom'
import { CustomModal } from './CustomModal'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

@observer
class RouteLeavingGuard extends React.Component {
   @observable modalVisible = false
   @observable lastLocation = null
   @observable confirmedNavigation = false

   showModal = location => {
      this.modalVisible = true
      this.lastLocation = location
   }
   closeModal = callback => {
      this.modalVisible = false
      callback()
   }
   handleBlockedNavigation = nextLocation => {
      const { shouldBlockNavigation } = this.props
      if (!this.confirmedNavigation && shouldBlockNavigation(nextLocation)) {
         this.showModal(nextLocation)
         return false
      }

      return true
   }
   handleConfirmNavigationClick = () =>
      this.closeModal(() => {
         const { navigate } = this.props

         if (this.lastLocation) {
            this.setState(
               {
                  confirmedNavigation: true
               },
               () => {
                  // Navigate to the previous blocked location with your navigate function
                  navigate(this.lastLocation.pathname)
               }
            )
         }
      })
   render() {
      const { when } = this.props
      return (
         <>
            <Prompt when={when} message={this.handleBlockedNavigation} />
            <CustomModal
               visible={this.modalVisible}
               onCancel={this.closeModal}
               onConfirm={this.handleConfirmNavigationClick}
            />
         </>
      )
   }
}
export default RouteLeavingGuard
