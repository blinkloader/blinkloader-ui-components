import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ type, children}) => {
  return (
    <div>
    {  type == 'border' &&
       <div className='border flex flex-column  justify-center items-center container'>
         {children}
       </div>   
    }
    {  type == 'noborder' &&
       <div className='noborder container'>
         {children}
       </div>   
    }
    {  type == 'page' &&
       <div className='page container'>
         {children}
       </div>   
    }
    <style jsx>{`
      @media screen and (max-width: 40em) {
        .border {
          border-width: 3px;
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
      }        
    `}</style>
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['border','noborder','page'])
};

export default Container;
