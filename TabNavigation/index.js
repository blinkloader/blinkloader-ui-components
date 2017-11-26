import React from 'react';
import find from 'array.prototype.find';
import NavButton from './NavButton';

class TabNavigation extends React.Component {
  constructor(props) {
    super(props);
    const tabs = this.props.children.map((el) => (el.props.tab))
    this.state = {
      currentTab: tabs[0].name,
      tabs: tabs || []
    };
  }
  
  buttonClickHandler(name) {
    this.setState({ currentTab: name });
  }

  render() {
    const { currentTab, tabs } = this.state;
    return (
      <div>
        <div className='flex flex-row justify-center'>
          {tabs.map((tab) => {
            return <NavButton 
                      onClick={this.buttonClickHandler.bind(this, tab.name)} 
                      name={tab.name} 
                      img={tab.img}
                      square={tab.square}
                      key={tab.name} 
                   />
          })} 
        </div>
        {find(this.props.children, (el) => (el.props.tab.name === currentTab))}
      <style jsx>{`
      `}</style>
      </div>
    );
  }
}

export default TabNavigation;
