import styled from "styled-components";
import { StyledBtn } from "../../components/shared/styles/button.styles";
import { devices } from "../../styles/breakpoints";

export const SiginCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding: 2rem;
  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const SignInHeader = styled.div`
  margin-top: 4.5rem;
  margin-right: 4.5rem;
  @media ${devices.mobile} {
    margin-right: 0;
    * {
      text-align: center;
    }
  }
`;

export const SignInForm = styled.form`
  width: 40rem;
  @media ${devices.mobile} {
    width: 100%;
  }
`;

export const SignInBtn = styled(StyledBtn)`
  width: 100%;
`;
