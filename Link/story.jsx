import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import Link from './index';

const firstArgAction = decorateAction([
  args => args.slice(0, 1)
]);

storiesOf('Link')
  .add('topnav', () => (
    <Link type='topnav'>Docs</Link>
  ))
  .add('bottomnav', () => (
    <Link type='bottomnav'>Quick start</Link>
  ))
  .add('within text', () => (
    <Link type='withintext'>see documentation</Link>
  ))
