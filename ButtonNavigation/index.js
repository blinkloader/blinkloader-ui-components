import React from 'react';

class ButtonNavigation extends React.Component {
  render() {
    return (
      <div>
      <button onClick={this.props.onClick} className={this.props.type==='back'? 'back' : this.props.blocking ? 'blocking' : 'forward'}>
        {this.props.type=='back'?<span className='backSign'>&#8249;</span>:''} 
        {this.props.children} 
        {this.props.type=='forward'?<span className='nextSign'>&#8250;</span>:''}
      </button>
      <style jsx>{`
        button {
          border-color:transparent;
          outline:none;
          font-family:'Open Sans',sans-serif;
          line-height: 1.5;
          width:100%;
          position:relative;
          padding: .25rem 1rem .3rem 1rem;
          font-size: 1rem;
          border-radius: 0.6rem;
          display: table;
          vertical-align:middle;
        }
        button:focus, button:active, button.primary:hover {
          background-color:#57bbf2;
        }
        .back {
          background-color:#eeeeee;
          color:#333333;
        }
        .backSign {
          position:absolute;
          left:1rem;
          font-size:1.5rem;
          line-height: 1.5rem;
        }
        .nextSign {
          position:absolute;
          right:1rem;
          font-size:1.5rem;
          line-height: 1.5rem;
        }
        .blocking {
          background-color:#cccccc;
          color:white;
        }
        .forward {
          background-color:#4edb43;
          color:white;
        }
      `}</style>
      </div>
    );
  }
}

export default ButtonNavigation;
