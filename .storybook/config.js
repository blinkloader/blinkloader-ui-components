import { configure } from '@storybook/react';

/*function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}
*/
const req = require.context('../', true, /story\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
