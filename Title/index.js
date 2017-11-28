import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ type, children }) => {
  return (
    <div className='title'>
    { type === 'intro' && <h1 className='intro'>{ children }</h1>}
    { type === 'pageSectionTitle' && <h2 className='pageSectionTitle'>{ children }</h2>}
    { type === 'paragraphH3' && <h3 className='paragraphH3'>{ children }</h3>}
    
    <style jsx>{`
      .title, h1, h2, h3 {
        font-family:'Open Sans',sans-serif;
        color:#333;
        line-height:1.5;
        margin:0;
      }
      .intro {
        font-size:36px;
        font-weight:200;
      }
      .pageSectionTitle {
        font-size:24px;
        font-weight:200;
        text-transform:uppercase;
        color:#4bc1e6;
      }
      .paragraphH3 {
        color:#999;
        font-weight:400;
        font-size:20px;
      }
    `}</style>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['intro', 'pageSectionTitle', 'paragraphH3']),
};

export default Title;
