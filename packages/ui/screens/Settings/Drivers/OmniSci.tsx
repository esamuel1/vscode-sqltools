import React from 'react';
import GenericSettings from './lib/GenericSettings';

const OmniSci = ({ settings, updateSettings, ...props }) => (
  <GenericSettings settings={settings} updateSettings={updateSettings} {...props}/>
);
// @TODO: add driver specific settings here

export default OmniSci;