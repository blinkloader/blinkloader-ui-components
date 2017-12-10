import React from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/index'
import Text from '../Text/index'

const labelStyle = {
  paddingBottom: '0.5rem',
};

const errorStyle = {
  paddingTop: '0.5rem',
};

const renderLabel = ({ label }) => (
  label ? (
    <div style={labelStyle}>
      <Title type='paragraphH3'>{label}</Title>
    </div>
  ) : null
);

const renderError = ({ touched, error }) => (
  error && touched ? (
    <div style={errorStyle}>
      <Text type='error'>{ error }</Text>
    </div>
  ) : null
);
const Input = ({
  input,
  label,
  meta,
  placeholder,
  type,
  focused,
  blurred,
  onFocus,
  onBlur,
  onChange
}) => {
  return (
    <div>
      {renderLabel({ label })}
      <input
        disabled={meta.submitting}
        value={input.value}
        onChange={input.onChange}
        placeholder={placeholder}
        type={type}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete={type}
        className={focused ?'focused w-100': blurred? 'blurred w-100' : meta.error ? 'error w-100' : 'w-100'}
      />
      {renderError(meta)}
      <style jsx>{`
      input, .blurred {
        -webkit-appearance:     none;
        -moz-appearance:        none;
        -ms-appearance:         none;
        -o-appearance:          none;
        appearance:             none;
        box-shadow: none !important; 
        border-style:solid;
        font-size:18px;
        font-family:'Open Sans',sans-serif;
        border-width:2px;
        border-color: rgb(240, 240, 240);
        padding: 0.7rem 1rem;
        font-size: 1rem;
        border-radius:0.7rem; 
      }
      input:focus:not(.error), input:hover:not(error), .focused {
        outline: none;
        border-color: #1DA3F0;
      }
      input.error {
        border-color: #FF00BF !important;
      }
      .w-100 {
        width:100%;
      }
      :-webkit-autofill { color: #fff !important; }
      `}</style>
    </div>
  );
};

Input.defaultProps = {
  input: {},
  meta: {},
  type: 'text',
};

Input.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
  }),
  label: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
    submitting: PropTypes.bool,
  }),
  placeholder: PropTypes.string,
  focused: PropTypes.bool,
  blurred: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.oneOf([
    'email',
    'url',
    'password',
    'organisation',
    'number',
  ]),
};


export default Input;
