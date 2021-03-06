import React from 'react';
import PropTypes from 'prop-types';

const Text = ({type, children}) => {
  return (
    <div className="text">
      { type === 'caption' && <span className="caption">{ children }</span>}
      { type === 'text' && <p className="text">{ children }</p>}
      { type === 'details' && <span className="details">{ children }</span>}
      { type === 'error' && <span className="error">{ children }</span>}
      { type === 'white' && <span className="white">{ children }</span>}
      { type === 'bold' && <span className="bold">{ children }</span>}
      <style jsx>
        {`
          @media screen and (max-width:30em) {
            .text {
              font-family:'Open Sans',sans-serif;
              color:#333;
              margin:0;
              font-size:14px;
              line-height:1.6;
            }
            .caption {
              font-size:16px;
              line-height:1.6;
              font-weight:400;
            }
            .details {
              font-size:12px;
              color:#999;
              line-height:1.4;
              font-weight:400;
            }
            .error {
              font-size:14px;
              color: #FF00BF;
              line-height:1.5;
              font-weight:400;
            }
            .white {
              font-size:14px;
              color: #FFFFFF;
              line-height:1.5;
              font-weight:400;
            }
            .bold {
              font-size:16px;
              line-height:1.6;
              font-weight: 800;
              color: #666666;
            }
          }
          @media screen and (min-width:30em) {
            .text {
              font-family:'Open Sans',sans-serif;
              color:#333;
              margin:0;
              font-size:16px;
              line-height:1.6;
            }
            .caption {
              font-size:18px;
              line-height:1.6;
              font-weight:400;
            }
            .details {
              font-size:12px;
              color:#999;
              line-height:1.4;
              font-weight:400;
            }
            .error {
              font-size:14px;
              color: #FF00BF;
              line-height:1.5;
              font-weight:400;
            }
            .white {
              font-size:14px;
              color: #FFFFFF;
              line-height:1.5;
              font-weight:400;
            }
            .bold {
              font-size:18px;
              line-height:1.6;
              font-weight: 800;
              color: #666666;
            }
          }
        `}
      </style>
    </div>
  );
};

Text.defaultProps = {
  children: '',
  type: 'caption'
};

Text.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['caption', 'text', 'details', 'error', 'white', 'bold'])
};

export default Text;
