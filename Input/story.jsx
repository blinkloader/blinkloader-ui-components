import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import Input from './index';


const firstArgAction = decorateAction([
  args => args.slice(0, 1)
]);

storiesOf('Input')
  .add('email', () => (
    <Input label='your best email' placeholder='your best email' type='email' />
  ))
  .add('website, focused', () => (
    <Input type='url' focused={true} />
  ))
  .add('password', () => (
    <Input type='password' />
  ))
  .add('company name', () => (
    <Input type='organization' />
  ))
  .add('number', () => (
    <Input type='number' />
  ))
  .add('website with error', () => (
    <Input 
      type='url' 
      input={{
              value: 'examplecom',
              onChange: action('on-change')
            }}
      meta={{
              error: 'invalid url',
              touched: true
            }}
      label='your website'
    />
  ))
