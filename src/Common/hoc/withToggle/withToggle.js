import React, { Component } from 'react'

export function withToggle(WrappedComponent) {
   return class extends Component {
      toggleStatus

      constructor(props) {
         super(props)
         this.state = { toggleStatus: false }
      }
      onToggle = event => {
         this.setState({
            toggleStatus: this.state.toggleStatus ? false : true
         })
      }
      render() {
         return (
            <WrappedComponent
               onToggle={this.onToggle}
               toggleStatus={this.state.toggleStatus}
              {...this.props}
            />
         )
      }
   }
}
