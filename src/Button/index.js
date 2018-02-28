import React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({size}) => {
  return (
    <div className="flex flex-row justify-center">
      <svg viewBox="0 0 20 20" className={`${size} spinner`} role="status">
        <path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"/>
      </svg>
      <style jsx>
        {`
          @keyframes loading {
            to {
              transform: rotate(360deg);
            }
          }

          .spinner {
            animation: loading .5s linear infinite;
            color: transparent;
            fill: #ffffff;
          }
          .large {
            height: 1.5rem;
            width: 1.5rem;
          } 
          .medium {
            height: 1.2rem;
            width: 1.2rem;
          }
          .small {
            height: 1rem;
            width: 1rem;
          }
        `}
      </style>
    </div>
  );
}

const Button = ({onClick, fullWidth, size, children, href, style, loading}) => {
  return (
    <div className={fullWidth ? 'full-width flex flex-row justify-center tc' : ''}>
      { !href &&
        <button
          onClick={onClick}
          style={style}
          className={`button ${fullWidth ? size + ' full-width' : size}`}
        >
          {loading ? <Spinner size={size}/> : children}
        </button>}
      { href &&
        <a
          href={href}
          style={style}
          className={`button ${fullWidth ? size + ' full-width' : size}`}
        >
          {loading ? <Spinner size={size}/> : children}
        </a>}
      <style jsx>
        {`
          button {
            border-color:transparent;
            outline:none;
            color:white;
            font-family:'Open Sans',sans-serif;
            background-color:#00adee;
            line-height: 1.5;
            height:100%
            vertical-align: middle;
            display: table-cell;
            text-shadow: 0 1px 2px rgba(0,0,0,.2);
            cursor: pointer;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
          }
          a.button {
            text-decoration:none;
            border-color:transparent;
            outline:none;
            color:white;
            font-family:'Open Sans',sans-serif;
            background-color:#00adee;
            line-height: 1.5;
            height:100%
            vertical-align: middle;
            display: table-cell;
            text-shadow: 0 1px 2px rgba(0,0,0,.2);
            cursor: pointer;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
          }
          button:focus, button:active, button:hover {
            background-color:#57bbf2;
          }
          a.button:focus, a.button:active, a.button:hover {
            background-color:#57bbf2;
          }
          .full-width {
            width:100%;
          }
          .large {
            font-size:1.5rem;
            padding:.5rem 1.5rem .6rem 1.5rem;
            border-radius:1rem; 
          } 
          .medium {
            padding: .375rem 1.2rem .415rem 1.2rem;
            font-size: 1.2rem;
            border-radius:0.8rem; 
          }
          .small {
            padding: .25rem .9rem .3rem .9rem;
            font-size: 1rem;
            border-radius:0.6rem; 
          }
        `}
      </style>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  href: PropTypes.string,
  style: PropTypes.object
};
Button.defaultProps = {
  size: 'small',
  fullWidth: false,
  href: '',
  style: {},
  loading: false,
  children: ''
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'small'])
};
Spinner.defaultProps = {
  size: 'small'
};

export default Button;
