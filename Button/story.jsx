import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import Button from './index';

const firstArgAction = decorateAction([
  args => args.slice(0, 1)
]);

storiesOf('Button')
  .add('large', () => (
    <Button onClick={firstArgAction('on-click')} size='large'>start for free</Button>
  ))
  .add('large, full width', () => (
    <Button onClick={firstArgAction('on-click')} size='large' fullWidth='true'>start for free</Button>
  ))
  .add('medium', () => (
    <Button onClick={firstArgAction('on-click')} size='medium'>try for free</Button>
  ))
  .add('medium, full width', () => (
    <Button onClick={firstArgAction('on-click')} size='medium' fullWidth='true'>try for free</Button>
  ))
  .add('small', () => (
    <Button onClick={firstArgAction('on-click')} size='small'>send e-mail</Button>
  ))
  .add('small, full width', () => (
    <Button onClick={firstArgAction('on-click')} size='small' fullWidth='true'>send e-mail</Button>
  ))
