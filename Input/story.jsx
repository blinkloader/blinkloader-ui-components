import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import Input from './index';

const firstArgAction = decorateAction([
  args => args.slice(0, 1)
]);

storiesOf('Input')
  .add('email', () => (
    <Input type='email' />
  ))
  .add('website', () => (
    <Input type='website' />
  ))
  .add('password', () => (
    <Input type='password' />
  ))
  .add('company name', () => (
    <Input type='name' />
  ))
  .add('number', () => (
    <Input type='number' />
  ))
