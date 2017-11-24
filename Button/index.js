import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <div>
      <button onClick={this.props.onClick} className={this.props.fullWidth? this.props.size +' full-width': this.props.size}>
        {this.props.children}
      </button>
      <style jsx>{`
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
        }
        button:focus, button:active, button:hover {
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
      `}</style>
      </div>
    );
  }
}

export default Button;
