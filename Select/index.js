import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactResponsiveSelect from 'react-responsive-select'


const Select = ({
  options,
  onChange,
  disabled,
  label,
  value,
  hovered,
}) => {

  return (
    <div>
        <ReactResponsiveSelect
          caretIcon={<span style={{float:'right'}}>+</span>}
          options={options}
          onChange={onChange}
          selectedValue={value}
          name='hello'
        />
      <style jsx>{`
      `}</style>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  })).isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  hovered: PropTypes.bool,
};

Select.defaultProps = {
  onChange: () => {},
  disabled: false,
  label: null,
  value: undefined,
};

export default Select;
