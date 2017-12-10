import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ type, children }) => {
  return (
    <div className='link'>
    { type == 'topnav' && <a className='topnav'>{ children }</a>}
    { type == 'bottomnav' && <a className='bottomnav'>{ children }</a>}
    { type == 'withintext' && <a className='withintext'>{ children }</a>}
    
    <style jsx>{`
      .link {
        font-family:'Open Sans',sans-serif;
        color:#333;
        font-weight:400;
        line-height:1.6;
      }
      .topnav {
        color:#00adee;
        font-size:18px;
        text-decoration: none;
      }
      .topnav:hover {
        color:#63c8ff;
        font-size:18px;
        text-decoration: none;
        padding-bottom:5px;
        border-bottom: solid 2px #63c8ff;
        cursor:pointer;
      }
      .bottomnav {
        font-size:16px;
        color: #a9a9a9;
      }
      .bottomnav:hover {
        color: #63c8ff;
        cursor:pointer;
      }
      .withintext {
        color:#00adee;
        font-size:18px;
        text-decoration: none;
      }
      .withintext:hover {
        color: #63c8ff;
        text-decoration: none;
        border-bottom: solid 1px #63c8ff;
        cursor:pointer;
      }
      
    `}</style>
    </div>
  );
}

Link.propTypes = {
  children : PropTypes.node,
  type: PropTypes.oneOf(['topnav', 'bottomnav', 'withintext']),
};

Link.defaultProps = {
  children : 'link',
  type:'topnav'
}

export default Link;
