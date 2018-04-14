import React, { Component } from 'react'
import Sidebar from 'react-sidebar'
import SidebarContent from './SidebarContent'

export default class CustomSidebar extends Component {
  

    render() {
        const sidebarProps = {
            docked: false,
            open: this.props.open,
            touch: true,
            shadow: true,
            pullRight: false,
            touchHandleWidth: 20,
            dragToggleDistance: 30,
            transitions: true,
            onSetOpen: this.props.onSetOpen,
        };

        return <Sidebar sidebar={<SidebarContent onSetOpen={this.props.onSetOpen} />} {...sidebarProps}>
            {this.props.children}
          </Sidebar>
    }
}
