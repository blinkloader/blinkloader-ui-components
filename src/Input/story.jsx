import React from 'react';
import { storiesOf } from '@storybook/react';
import Input from './index';

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
              onChange: function () { console.log('Foo!') }
            }}
      meta={{
              error: 'invalid url',
              touched: true
            }}
      label='your website'
    />
  ))
