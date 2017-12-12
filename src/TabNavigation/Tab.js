import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/index'

const Tab = ({ tab, children, containerType }) => {
  return (
    <Container type={containerType ? containerType : 'noborder'}>
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
  }).isRequired,
  wrapperName: PropTypes.string,
  wrapperType: PropTypes.string,
  containerType: PropTypes.string
};

export default Tab;
