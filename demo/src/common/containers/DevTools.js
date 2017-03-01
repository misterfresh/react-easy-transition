'use strict'
import React from 'react'
import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-k"
    changePositionKey="ctrl-w"
    defaultIsVisible={false}
    fluid={false}
    defaultPosition="right"
    defaultSize={250}
  >
    <LogMonitor
      theme="tomorrow"
      preserveScrollTop={false}
      select={state=>state}
      expandActionRoot={true}
      expandStateRoot={true}
    />
  </DockMonitor>
)