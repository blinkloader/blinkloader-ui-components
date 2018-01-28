import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text/index';

const Container = ({type, children, decoration}) => {
  return (
    <div>
      { type === 'border' &&
        <div className="wrap w-100 flex-column justify-center">
          <div className="border flex flex-column  justify-center items-center container">
            { children }
          </div>
        </div>
      }
      { type === 'noborder' &&
        <div className="noborder container">
          { children }
        </div>
      }
      { type === 'nopadding' &&
        <div className="nopadding container">
          { children }
        </div>
      }
      { type === 'page' &&
        <div className="page container">
          { children }
        </div>
      }
      { type === 'decoration' &&
        <div className="wrap w-100 flex-column justify-center">
          <div className="positionedBlock">
            <div className="decoratedBlock">
              <Text type="white">
                { decoration }
              </Text>
            </div>
          </div>
          <div className="border flex flex-column  justify-center items-center container">
            { children }
          </div>
        </div>
      }
      <style jsx>
        {`
          .wrap {
            position: relative;
            padding-top:10px;
          }
          .positionedBlock {
            position:absolute;
            top:12px;
            width:100%;
          }
          .decoratedBlock {
            background-color:#42B273;
            text-align:center;
            margin-left: auto;
            margin-right: auto;
            max-width:7rem; 
            border-radius:0 0 3px 3px;
          }
          .container {
            height:auto;
            width:100%;
            box-sizing:border-box;
            font-family:'Open Sans',sans-serif;
            color:#333;
          }
          .nopadding {
            padding:0;
          }
          @media screen and (max-width: 40em) {
            .border {
              border-width: 2px;
              border-style: solid;
              border-color: rgb(240, 240, 240);
              border-radius:2rem;
              padding:1rem;
              text-align: center;
              box-shadow: 0 8px 15px 0 rgba(5,57,106,.06);
            }
            .noborder {
              padding:1rem;
            }
            .page {
              padding:2rem;
            }
          }        
          @media screen and (min-width: 40em) {
            .border {
              border-width: 2px;
              border-style: solid;
              border-color: rgb(240, 240, 240);
              border-radius:2rem;
              padding:2rem;
              text-align: center;
              box-shadow: 0 8px 15px 0 rgba(5,57,106,.06);
              
            }
            .noborder {
              padding:2rem;
            }
            .page {
              padding:4rem;
            }
          }        
        `}
      </style>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  decoration: PropTypes.string,
  type: PropTypes.oneOf(['border', 'noborder', 'page', 'decoration', 'nopadding']).isRequired
};

Container.defaultProps = {
  decoration: null
};

export default Container;
