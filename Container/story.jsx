import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import Container from './index';
import Title from '../Title/index'
import Button from '../Button/index'

const firstArgAction = decorateAction([
  args => args.slice(0, 1)
]);

storiesOf('Container')
  .add('with border', () => (
    <Container type='border'>
      <Title type='intro'>
        Hobby
      </Title>
      <div style={{padding:'20px 0'}}>
        <Title type='paragraphH3'>
          Best for Pet Project
        </Title>
      </div>
      <Button size='medium'>
        Start Now
      </Button>
    </Container>
  ))
  .add('no border', () => (
    <Container type='noborder'><Title type='intro'>Hobby</Title><Title type='pageSectionTitle'>Best for Pet Project</Title></Container>
  ))
  .add('page', () => (
    <Container type='page'><Title type='intro'>Hobby</Title><Title type='pageSectionTitle'>Best for Pet Project</Title></Container>
  ))
