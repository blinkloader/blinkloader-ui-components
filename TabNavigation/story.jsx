import React from 'react';
import { storiesOf } from '@storybook/react';
import { action, decorateAction } from '@storybook/addon-actions';
import TabNavigation from './index';
import Tab from './Tab';
import Code from '../Code';
import reactImage from './reactImage'

storiesOf('TabNavigation')
  .add('default', () => (
  <TabNavigation>
    <Tab tab={{name:'React.js', img:reactImage, square:true}}>
      <div className='flex flex-row-ns flex-column justify-around'>
        <div>
          Hello2 react
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
    <Tab tab={{name:'GitHub Pages', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuTImkCppeNURi0TJxLcZfnVcQv3anm7KOao21tAy7UM0ITy-', square:true}}>
      Hello1 github
    </Tab>
    <Tab tab={{name:'Jekyll', img:'https://cdn.worldvectorlogo.com/logos/jekyll.svg'}} name='Jekyll'>
      Hello1 jekyll
    </Tab>
    <Tab tab={{name:'Metalsmith', img:'http://www.metalsmith.io/metalsmith.io/images/twitter-image.png'}}>
      Hello1 metalsmith
    </Tab>
    <Tab tab={{name:'Middleman', img:'https://cdn.worldvectorlogo.com/logos/middleman.svg', square:true}}>
      Hello1 middleman
    </Tab>
  </TabNavigation>
  
  ))

