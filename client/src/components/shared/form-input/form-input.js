import React from "react";

import {
  FormInputContainer,
  FormInputStyles,
  FormInputLabel,
  ErrorMsg,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, error, ...props }, ref) => (
  <FormInputContainer>
    <FormInputStyles
      ref={ref}
      onChange={handleChange}
      {...props}
      aria-invalid={!!error}
      aria-describedby={`error-${props.id}`}
    />
    {label ? (
      <FormInputLabel
        htmlFor={props.id}
        className={props.value.length ? "shrink" : ""}
        data-invalid={!!error}
      >
        {label}
      </FormInputLabel>
    ) : null}
    <ErrorMsg id={`error-${props.id}`}>{error}</ErrorMsg>
  </FormInputContainer>
);

export default React.forwardRef(FormInput);
