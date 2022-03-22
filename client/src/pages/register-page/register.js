import { useRef, useState } from "react";
import FormInput from "../../components/styles/form-input/form-input";
import ContainerStyles from "../../components/styles/styles/container.styles";
import {
  SignupCon,
  SignupHeader,
  SignupForm,
  SignupBtn,
} from "./register.style";
const RegisterPage = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const confirmPwdField = useRef();

  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    if (password !== value) {
      confirmPwdField.current.setCustomValidity(
        "Should match with password field"
      );
    } else {
      confirmPwdField.current.setCustomValidity("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ContainerStyles>
      <SignupCon>
        <SignupHeader>
          <h1>Signup</h1>
          <p>We donot share ypur personal details with anyone</p>
        </SignupHeader>
        <SignupForm onSubmit={handleSubmit}>
          <FormInput
            type="text"
            label="First Name"
            id="firsName"
            handleChange={onFirstNameChange}
            value={firstName}
            required
          />
          <FormInput
            type="text"
            label="Last Name"
            id="lasttName"
            handleChange={onLastNameChange}
            value={lastName}
            required
          />
          <FormInput
            type="email"
            label="Email"
            id="email"
            handleChange={onEmailChange}
            value={email}
            required
          />
          <FormInput
            type="password"
            id="password"
            label="Password"
            minLength="6"
            handleChange={onPasswordChange}
            value={password}
            pattern="^[a-zA-Z0-9]+$"
            required
          />
          <FormInput
            type="password"
            label="Confirm Password"
            id="confirmPassword"
            ref={confirmPwdField}
            handleChange={onConfirmPasswordChange}
            value={confirmPassword}
            required
          />
          <SignupBtn type="submit">Signup</SignupBtn>
        </SignupForm>
      </SignupCon>
    </ContainerStyles>
  );
};

export default RegisterPage;
