import React from 'react';

class Container extends React.Component {
  render() {
    return (
      <div>
      {  this.props.type == 'border' &&
         <div className='border flex flex-column  justify-center items-center container'>
           {this.props.children}
         </div>   
      }
      {  this.props.type == 'noborder' &&
         <div className='noborder container'>
           {this.props.children}
         </div>   
      }
      {  this.props.type == 'page' &&
         <div className='page container'>
           {this.props.children}
         </div>   
      }
      <style jsx>{`
        .container {
          height:auto;
          width:100%;
          box-sizing:border-box;
        }
        .border {
          border-width: 3px;
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
        
      `}</style>
      </div>
    );
  }
}

export default Container;
