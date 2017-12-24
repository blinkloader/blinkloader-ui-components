import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Container from '../Container';
import ButtonNavigation from '../ButtonNavigation';
import Title from '../Title';
import Text from '../Text';
import Input from '../Input';
import Select from '../Select';

const options = [
  { text: 'Static Website', value: 'Static Website' },
  { text: 'React Components', value: 'React Components' },
  { text: 'Blinkloader SDK', value: 'Blinkloader SDK' }
];

class GreetingSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: '',
      website: '',
      name: '',
      showSlider: true,
      hide: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.sendUserInfo = this.sendUserInfo.bind(this);
    this.closeSlider = this.closeSlider.bind(this);
  }
  handleChange(event) {
    console.log(event);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(target)
let partialState = {};
partialState[name] = value;
this.setState(partialState);
    console.log(this.state)
  }
  handleSelect(event) {
    const value = event.value
    const name = event.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }
  sendUserInfo(e) {
    console.log(this.state);
    this.refs.slider.slickGoTo(e)
  }
  changeHandler(e) {
    console.log(e);
    this.refs.slider.slickGoTo(e)
  }
  closeSlider() {
    this.setState({ hide: 'hide'});
  }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { hide } = this.state;
    return (
      <div className={`${hide} border`} style={{margin:'4rem', maxWidth:'48rem', marginLeft: 'auto', marginRight: 'auto'}}>
        <Slider ref='slider' {...settings}>
          <div className='flex flex-column items-between justify-between'>
            <div className='flex flex-column items-start ph3'>
              <Title type='intro'>Hi! Welcome to Blinkloader dashboard!</Title>
              <Title type='paragraphH3'>This is a little tour to get you familiar with the platform</Title>
            </div>
              <div className='pt3 ph4 flex-row'>
                  <Title type='paragraphH3'>
                    First, let us know a bit about yourself, to set up your optimization experience
                  </Title>
              </div>
              <form onSubmit={this.handleSubmit} className='flex flex-column items-between fg-1' autoComplete="on">
                <div style={{overflow:'overlay'}}  className='flex flex-row justify-center items-start pa3 fg-1'>
                  <div  className='flex flex-column w-50 pa3'>
                    <div className='fg-1 w-100 tc'>
                    <div className='pb3'>
                    <Input label='Company Name' value={this.state.name} type='organization' name='name' onChange={this.handleChange}/>
                    </div>
                    <div className='pb3'>
                    <Input label='Website' type='url' value={this.state.website} name='website' onChange={this.handleChange}/>
                    </div>
                    </div>
                  </div>
                  <div className='flex flex-column w-50 pa3'>
                    <div className='pb3 tc'>
                    <Select
                      options={options}
                      onChange={this.handleSelect}
                      label="Stack"
                      name='stack'
                    />
                    </div>
                  </div>
                </div>
                <div className='flex flex-row ph3'>

                  <ButtonNavigation 
                    className='flex flex-row w-100 fg-1' 
                    type='forward' 
                    onClick={this.sendUserInfo.bind(this,1)}
                  >
                    Next
                  </ButtonNavigation>
                </div>
              </form>
          </div>
          <div className='flex flex-column items-between justify-between'>
            <div className='ph3'>
              <Title type='intro'>Now let us introduce the platform.</Title>
            </div>
            <div style={{overflow:'overlay'}}  className='flex flex-row justify-center items-center pa3 fg-1'>
              <div  className='flex flex-column w-50 pa3'>
                <Title type='paragraphH3'>
                  Advantage #1
                </Title>
                <Text type='text'>description</Text>
              </div>
              <div className='flex flex-column w-50 pa3'>
                <img className='w-100 h-auto' src='https://cdn.blinkloader.com/2656743524/1716968120/26441_logo.png'/>
              </div>
            </div>
            <div className='flex flex-row ph3'>
              <div className='pr2'>
                <ButtonNavigation className='flex flex-row w-100' type='back' onClick={this.changeHandler.bind(this,0)}>back to form</ButtonNavigation>
              </div>
              <ButtonNavigation className='flex flex-row fg-1' type='forward' onClick={this.changeHandler.bind(this,2)}>start with free plan now</ButtonNavigation>
            </div>
          </div>
          <div className='flex flex-column items-between justify-between'>
            <div className='ph3'>
              <Title type='intro'>Add payment to avoid hard limits in future</Title>
            </div>
            <div style={{overflow:'overlay'}}  className='flex flex-row justify-center items-center pa3 fg-1'>
              <div  className='flex flex-column w-50 pa3'>
                <Text type='text'>
                  If you have many big images and visitors, Free plan may not last long.
                </Text>
                <div className='pv3'>
                  <Text type='text'>
                    We recommend to add your payment now and when you exceed Free plan we transfer you to plan you chose automatically.
                  </Text>
                </div>
                <Text type='text'>
                  If you want to choose other plan after Free Forever you can do it
                </Text>
              </div>
              <div className='flex flex-column w-50 pa3'>
                <img className='w-100 h-auto' src='https://cdn.blinkloader.com/2656743524/1716968120/26441_logo.png'/>
              </div>
            </div>
            <div className='flex flex-row ph3'>
              <div className='pr2'>
                <ButtonNavigation className='flex flex-row w-100' type='back' onClick={this.changeHandler.bind(this,1)}>back to intro</ButtonNavigation>
              </div>
              <ButtonNavigation className='flex flex-row fg-1' type='forward' blocking onClick={this.changeHandler.bind(this,3)}>I still want to proceed</ButtonNavigation>
            </div>
          </div>
          <div className='flex flex-column items-between justify-between'>
            <div style={{overflow:'overlay'}}  className='flex flex-row justify-center items-center pa3 fg-1'>
              <div className='flex flex-column items-center w-50'>
                <img className='w-100 h-auto mw' src='https://cdn.blinkloader.com/2656743524/1716968120/20851_max.png'/>
              </div>
              <div  className='flex flex-column w-50 pa3'>
                <Title type='paragraphH3'>
                  Great to see you so motivated to get started! Keep in mind the limits and Welcome to Blinkloader!
                </Title>
              </div>
            </div>
            <div className='flex flex-row ph3'>
              <div className='pr2'>
                <ButtonNavigation className='flex flex-row w-100' type='back' onClick={this.changeHandler.bind(this,2)}>back to payment info</ButtonNavigation>
              </div>
              <ButtonNavigation className='flex flex-row fg-1' type='forward' onClick={this.closeSlider}>Great, bring me to the dashboard!</ButtonNavigation>
            </div>
          </div>
       <style jsx global>{`
          .slick-track{
            display: flex;
          }
          .slick-track .slick-slide{
            display: flex;
            height: auto;
            align-items: between; //optional
            justify-content: between; //optional
          }
        `}
        </style>
        <style jsx global>{`
          .modal-background {
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
          }
          .ph3 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .pv3 {
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
          .ph4 {
            padding-left: 2rem;
            padding-right: 2rem;
          }
          .pt3 {
            padding-top: 1rem;
          }
          .pb3 {
            padding-bottom: 1rem;
          }
          .mw {
            max-width:10rem;
          }
          .tc {
            text-align:center;
          }
          .w-100{
            width:100%;
          }
          .w-50{
            width:50%;
          }
          .h-auto {
            height: auto;
          }
          .pa3 {
            padding:1rem;
          }
          .pr2 {
            padding-right:0.5rem;
          }
          .fg-1 {
            flex-grow:1;
          }
          @media screen and (max-width: 40em) {
            .border {
              border-width: 2px;
              border-style: solid;
              border-color: rgb(240, 240, 240);
              border-radius:2rem;
              padding:1rem;
              box-shadow: 0 8px 15px 0 rgba(5,57,106,.06);
              background-color: white;
            }
          }        
          @media screen and (min-width: 40em) {
            .border {
              border-width: 2px;
              border-style: solid;
              border-color: rgb(240, 240, 240);
              border-radius:2rem;
              padding:2rem;
              box-shadow: 0 8px 15px 0 rgba(5,57,106,.06);
              background-color: white;
            }
          }
          .hide {
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
  opacity: 0;
  visibility: hidden; 
          }
        `}</style>
        </Slider>
      </div>
    );
  };
};

export default GreetingSlider;
