import React from "react";

import {
  FormInputContainer,
  FormInputStyles,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...props }, ref) => (
  <FormInputContainer>
    <FormInputStyles ref={ref} onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel
        htmlFor={props.id}
        className={props.value.length ? "shrink" : ""}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </FormInputContainer>
);

export default React.forwardRef(FormInput);
