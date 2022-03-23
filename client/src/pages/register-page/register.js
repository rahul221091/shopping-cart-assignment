import { useRef, useState } from "react";
import FormInput from "../../components/shared/form-input/form-input";
import ContainerStyles from "../../components/shared/styles/container.styles";
import {
  SignupCon,
  SignupHeader,
  SignupForm,
  SignupBtn,
} from "./register.style";
const RegisterPage = (props) => {
  const registerForm = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errObj, setErrorObj] = useState({});
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
  };

  const checkValidity = () => {
    let isValid = true;

    errObj["firstName"] = "";
    if (!firstName) {
      isValid = false;
      errObj["firstName"] = "Please enter first name";
    }

    errObj["lastName"] = "";
    if (!lastName) {
      isValid = false;
      errObj["lastName"] = "Please enter last name";
    }

    errObj["email"] = "";
    if (!email && !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
      isValid = false;
      errObj["email"] = "Please enter valid email address";
    }

    errObj["password"] = "";
    if (!password || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      isValid = false;
      errObj["password"] = "Password does not match with the pattern";
    }

    errObj["confirmPassword"] = "";
    if (!confirmPassword || confirmPassword !== password) {
      isValid = false;
      errObj["confirmPassword"] = "Should be same as password";
    }

    setErrorObj({ ...errObj });
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // registerForm.current.reportValidity();
    const isValid = checkValidity();
    console.log("validity object", confirmPwdField.current.validity);
    return isValid;
  };

  return (
    <ContainerStyles>
      <SignupCon>
        <SignupHeader>
          <h1>Signup</h1>
          <p>We donot share ypur personal details with anyone</p>
        </SignupHeader>
        <SignupForm ref={registerForm} novalidate onSubmit={handleSubmit}>
          <FormInput
            type="text"
            label="First Name"
            id="firsName"
            handleChange={onFirstNameChange}
            value={firstName}
            error={errObj["firstName"]}
          />
          <FormInput
            type="text"
            label="Last Name"
            id="lasttName"
            handleChange={onLastNameChange}
            value={lastName}
            error={errObj["lasttName"]}
          />
          <FormInput
            type="email"
            label="Email"
            id="email"
            handleChange={onEmailChange}
            value={email}
            error={errObj["email"]}
          />
          <FormInput
            type="password"
            id="password"
            label="Password"
            handleChange={onPasswordChange}
            value={password}
            error={errObj["password"]}
          />
          <FormInput
            type="password"
            label="Confirm Password"
            id="confirmPassword"
            ref={confirmPwdField}
            handleChange={onConfirmPasswordChange}
            value={confirmPassword}
            error={errObj["confirmPassword"]}
          />
          <SignupBtn type="submit">Signup</SignupBtn>
        </SignupForm>
      </SignupCon>
    </ContainerStyles>
  );
};

export default RegisterPage;
