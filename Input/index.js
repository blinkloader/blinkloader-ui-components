import React from 'react';

const labelStyle = {
  marginBottom: '1rem',
};

const errorStyle = {
  marginTop: '1rem',
};

const renderLabel = ({ label }) => (
  label ? (
    <div style={labelStyle}>
      <Text>{label}</Text>
    </div>
  ) : null
);

const renderError = ({ error, touched }) => (
  error && touched ? (
    <div style={errorStyle}>
      <Text color={'torchRed'}>{ error }</Text>
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
  onFocus,
  onBlur,
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
      />
      {renderError(meta)}
    </div>
  );
};

Input.defaultProps = {
  input: {},
  meta: {},
  type: 'text',
};

export default Input;
