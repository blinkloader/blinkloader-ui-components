import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import ButtonNavigation from './index';

const firstArgAction = decorateAction([
  args => args.slice(0, 1)
]);
    
storiesOf('ButtonNavigation')
  .add('back', () => (
    <ButtonNavigation type='back' onClick={firstArgAction('on-click')}>back to intro</ButtonNavigation>
  ))
  .add('next non-blocking', () => (
    <ButtonNavigation type='forward' onClick={firstArgAction('on-click')} blocking={false}>Great! Bring me to the dashboard</ButtonNavigation>
  ))
  .add('next blocking', () => (
    <ButtonNavigation type='forward' onClick={firstArgAction('on-click')}  blocking={true}>I still want to proceed</ButtonNavigation>
  ))
