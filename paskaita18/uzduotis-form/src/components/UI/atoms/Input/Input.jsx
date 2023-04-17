import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledInputWrapper, StyledInput, StyledHelperText } from './Input.styled';

function Input(props, ref) {
  const { helperText, startIcon, endIcon, onChange, value, hasIcon } = props;
  return (
    <div>
      <StyledInputWrapper ref={ref}>
        {startIcon}
        <StyledInput onChange={(e) => onChange(e.target.value)} value={value} hasIcon={hasIcon} />
        {endIcon}
      </StyledInputWrapper>
      <StyledHelperText>{helperText}</StyledHelperText>
    </div>
  );
}

export default forwardRef(Input);

Input.propTypes = {
  helperText: PropTypes.string,
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  onChange: PropTypes.func,
  value: PropTypes.string,
  hasIcon: PropTypes.bool,
};
