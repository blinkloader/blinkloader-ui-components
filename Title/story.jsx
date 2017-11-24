import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import Title from './index';

const firstArgAction = decorateAction([
  args => args.slice(0, 1)
]);

storiesOf('Title')
  .add('intro title h1', () => (
    <Title type='intro'>How many leads have you lost because of 3G? 
Never lose them again. Blinkloader is a web performance optimization platform that is both advanced and easy to integrate.</Title>
  ))
  .add('page section title h2', () => (
    <Title type='pageSectionTitle'>What's the big deal?</Title>
  ))
  .add('paragraph title h3', () => (
    <Title type='paragraphH3'>Adaptive Images</Title>
  ))
