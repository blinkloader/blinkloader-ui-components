import React from 'react';

class Text extends React.Component {
  render() {
    return (
      <div className='text'>
      {this.props.type == 'caption' && <span className='caption'>{this.props.children}</span>}
      {this.props.type == 'text' && <p className='text'>{this.props.children}</p>}
      {this.props.type == 'details' && <span className='details'>{this.props.children}</span>}
      
      <style jsx>{`
        .text {
          font-family:'Open Sans',sans-serif;
          color:#333;
          font-weight:400;
          line-height:1.6;
        }
        .caption {
          font-size:18px;
        }
        .text {
          font-size:16px;
        }
        .details {
          font-size:14px;
        }
        
      `}</style>
      </div>
    );
  }
}

export default Text;
