import { useState } from "react";
import FormInput from "../../components/shared/form-input/form-input";
import ContainerStyles from "../../components/shared/styles/container.styles";
import { SiginCon, SignInHeader, SignInForm } from "./signin.style";
import { SignInBtn } from "./signin.style";
const SignInPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errObj, setErrorObj] = useState({});
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const checkValidity = () => {
    let isValid = true;

    errObj["email"] = "";
    if (!email) {
      isValid = false;
      errObj["email"] = "Please enter valid email address";
    }

    errObj["password"] = "";
    if (!password) {
      isValid = false;
      errObj["password"] = "Password does not match with the pattern";
    }
    setErrorObj({ ...errObj });
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkValidity();
  };

  return (
    <ContainerStyles>
      <SiginCon>
        <SignInHeader>
          <h1>Login</h1>
          <p>Get access to your Order, Wishlist and Recommendations</p>
        </SignInHeader>
        <SignInForm onSubmit={handleSubmit}>
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
            label="Password"
            id="password"
            handleChange={onPasswordChange}
            value={password}
            error={errObj["password"]}
          />
          <SignInBtn type="submit">Login</SignInBtn>
        </SignInForm>
      </SiginCon>
    </ContainerStyles>
  );
};

export default SignInPage;
