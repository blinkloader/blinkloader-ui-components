import React from 'react';
import PropTypes from 'prop-types';

const Code = ({ children  })  => {
  return (
    <pre className='code'>
      <code>
      { children }
      </code>
    <style jsx>{`
      pre {
        margin:0;
      }
    `}</style>
    </pre>
  );
}

Code.propTypes = {
  children: PropTypes.node,
};

export default Code;
