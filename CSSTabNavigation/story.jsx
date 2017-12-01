import React from 'react';
import { storiesOf } from '@storybook/react';
import CSSTabNavigation from './index';
import Tab from '../TabNavigation/Tab';
import Code from '../Code';

storiesOf('CSSTabNavigation')
  .add('default', () => (
    <CSSTabNavigation>
      <Tab tab={{name:'React.js', img:'./react.png', square:true}}>
        <div className='flex flex-row-ns flex-column justify-around'>
          React.js
        </div>
      </Tab>
      <Tab tab={{name:'GitHub Pages', img:'./github.png', square:true}}>
        <div className='flex flex-row-ns flex-column justify-around'>
          <div>
            GitHub Pages
          </div>
          <div>
            <Code>
              <span>$ yarn global add blinkloader</span>
              <br />
              <span>$ blinkloader init</span>
              <br />
              <span>$ blinkloader optimize</span>
              <br />
              <span>$ blinkloader server</span>
              <br />
              <span>$ blinkloader deploy</span>
              <br />
            </Code>
          </div>
        </div>
      </Tab>
      <Tab tab={{name:'Jekyll', img:'./jekyll.svg'}} name='Jekyll'>
        <div className='flex flex-row-ns flex-column justify-around'>
          Jekyll
        </div>
      </Tab>
      <Tab tab={{name:'Metalsmith', img:'./metalsmith.png'}}>
        <div className='flex flex-row-ns flex-column justify-around'>
          Metalsmith
        </div>
      </Tab>
      <Tab tab={{name:'Middleman', img:'./middleman.svg', square:true}}>
        <div className='flex flex-row-ns flex-column justify-around'>
          Middleman
        </div>
      </Tab>
    </CSSTabNavigation>
  ))


