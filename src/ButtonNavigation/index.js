import React from 'react';
import PropTypes from 'prop-types';

const ButtonNavigation = ({ type, blocking, children, onClick }) =>  {
  return (
    <div>
      <span className = {
        `flex flex-row items-center justify-center
        ${type === 'back'? 'back button' : blocking ? 'blocking button' : 'forward button'}`
      }>
        { type === 'back'? <span className='backSign'>&#8249;</span> : ''}
        <button
          className = {
            type === 'back'? 'back' : blocking ? 'blocking' : 'forward'
          }
          onClick={ onClick }
        >
          { children }
        </button>
        { type === 'forward'? <span className='nextSign'>&#8250;</span> : ''}
      </span>
      <style jsx>{`
        .button {
          border-color:transparent;
          outline:none;
          border-radius: 0.6rem;
          vertical-align:middle;
          width:100%;
        }
        button {
          flex-grow:1;
          border-color:transparent;
          outline:none;
          font-family:'Open Sans',sans-serif;
          line-height: 1.5;
          width:auto;
          position:relative;
          padding: .25rem 1rem .3rem 1rem;
          font-size: 1rem;
          border-radius: 0.6rem;
        }
        .backSign {
          padding-left: 0.5rem;
          padding-bottom: 0.3rem;
          width: auto;
          font-size: 1.5rem;
        }
        .nextSign {
          padding-right: 0.5rem;
          padding-bottom: 0.3rem;
          width: auto;
          font-size: 1.5rem;
        }
        .back {
          background-color:#eeeeee;
          color:#333333;
        }
        .back:focus, .back:hover, .back:active {
          background-color:#e5e5e5;
          cursor:pointer;
        }
        .blocking {
          text-shadow: 0 1px 2px rgba(0,0,0,.2);
          background-color:#cccccc;
          color:white;
        }
        .blocking:focus, .blocking:hover, .blocking:active {
          background-color:#d6d4d4;
          cursor:pointer;
        }
        .forward {
          text-shadow: 0 1px 2px rgba(0,0,0,.2);
          background-color:#4edb43;
          color:white;
        }
        .forward:focus, .forward:hover, .forward:active {
          background-color:#58e04c;
          cursor:pointer;
        }
      `}</style>
    </div>
  );
}

ButtonNavigation.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['back', 'forward', 'finish']),
  onClick: PropTypes.func,
  blocking: PropTypes.bool
};

export default ButtonNavigation;