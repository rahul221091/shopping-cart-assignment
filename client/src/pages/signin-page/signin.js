import { useState } from "react";
import FormInput from "../../components/styles/form-input/form-input";
import ContainerStyles from "../../components/styles/styles/container.styles";
import { SiginCon, SignInHeader, SignInForm } from "./signin.style";
import { SignInBtn } from "./signin.style";
const SignInPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
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
            handleChange={onEmailChange}
            value={email}
            required
          />
          <FormInput
            type="password"
            label="Password"
            handleChange={onPasswordChange}
            value={password}
            required
          />
          <SignInBtn type="submit">Login</SignInBtn>
        </SignInForm>
      </SiginCon>
    </ContainerStyles>
  );
};

export default SignInPage;
