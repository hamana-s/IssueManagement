import { addParameters, configure } from '@storybook/react';

addParameters({
  options: {
    showPanel: false,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.[jt]sx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);