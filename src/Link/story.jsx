import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './index';

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
