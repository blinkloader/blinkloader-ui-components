import React from 'react';


class Guide extends React.Component {
  render() {
    return (
      <div>
        <div className='bg-primary white'>
          Primary color
        </div>
        <div className='bg-secondary white'>
          Secondary color
        </div>
        <div className='bg-action white'>
          Action color
        </div>
        <div className='heading'>
          Headings color - blue and font - 'Open Sans',sans-serif; 
        </div>
        <div className='text'>
          Text color - blue and font - 'Open Sans',sans-serif; 
        </div>
        <a className='link'>
          Links color - blue and font - 'Open Sans',sans-serif; 
        </a>
        <button className='button'>
          Button rounding - 10 px, padding 15 25 15 25, no shadow and outline
        </button>
          
        <style jsx>{`
          .bg-action {
            background-color:#4edb43;
          }
          .bg-primary {
            background-color:#FF0000;
          }
          .bg-secondary {
            background-color:#FF00BF;
          }
          .white {
            color: white;
          }
          .heading {
            color: #00adee;
          }
          .link {
            color: #00adee;
          }
          .text {
            color: #333;
          }
          .button {
            border-color:transparent;
            outline:none;
            color:white;
            font-family:'Open Sans',sans-serif;
            font-size:32px;
            border-radius:10px; 
            padding:15px 25px 15px 25px;
          }
        `}</style>
      </div>
    );
  } 
} 

export default Guide;
                                          
