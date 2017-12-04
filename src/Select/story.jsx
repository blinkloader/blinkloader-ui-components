import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Select from './index';

const options = [
  { text: 'Static Website', value: 'Static Website' },
  { text: 'React Components', value: 'React Components' },
  { text: 'Blinkloader SDK', value: 'Blinkloader SDK' }
];

storiesOf('Select')
  .add('default', () => (
    <Select
      options={options}
      onChange={action('on-change')}
      label="Your stack"
    />
  ))
  .add('with value set', () => (
    <Select
      options={options}
      value={'React Components'}
      onChange={action('on-change')}
    />
  ))
