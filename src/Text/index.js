import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ type, children })  => {
  return (
    <div className='text'>
    { type === 'caption' && <span className='caption'>{ children }</span>}
    { type === 'text' && <p className='text'>{ children }</p>}
    { type === 'details' && <span className='details'>{ children }</span>}
    { type === 'error' && <span className='error'>{ children }</span>}
    
    <style jsx>{`
      .text {
        font-family:'Open Sans',sans-serif;
        color:#333;
        font-weight:400;
        line-height:1.6;
        margin:0;
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
      .error {
        font-size:14px;
        color: #FF00BF;
      }
      
    `}</style>
    </div>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['caption', 'text', 'details', 'error'])
};

export default Text;
