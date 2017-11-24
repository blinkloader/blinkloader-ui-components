import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import Text from './index';

const firstArgAction = decorateAction([
  args => args.slice(0, 1)
]);

storiesOf('Text')
  .add('caption', () => (
    <Text type='caption'>Price per month</Text>
  ))
  .add('regular text', () => (
    <Text type='text'>1 served asset = 1 HTML document or all CSS for 1 HTML document or 1 picture we serve from our CDN</Text>
  ))
  .add('small details', () => (
    <Text type='details'>up to 5 GB storage limit</Text>
  ))
