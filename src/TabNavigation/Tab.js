import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/index'

const Tab = ({ tab, children }) => {
  return (
    <Container type='noborder'>
       {children}
    </Container>
  );
}
Tab.propTypes = {
  children: PropTypes.node,
  tab: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    square: PropTypes.bool,
  }).isRequired
};

export default Tab;
