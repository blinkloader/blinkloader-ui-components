import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Guide from './index';

storiesOf('Guide')
  .add('default', () => (
    <Guide />
  ))
