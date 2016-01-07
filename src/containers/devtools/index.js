import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// import SliderMonitor from 'redux-slider-monitor';
// import FilterableLogMonitor from 'redux-devtools-filterable-log-monitor';
// <LogMonitor theme="tomorrow" />
// <SliderMonitor keyboardEnabled />

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    defaultPosition="right"
    defaultSize={0.15}>
    <LogMonitor theme="tomorrow" />
  </DockMonitor>
);

export default DevTools;
