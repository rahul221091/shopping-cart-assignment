import styled from "styled-components";
import { StyledBtn } from "../../components/shared/styles/button.styles";
import { devices } from "../../styles/breakpoints";

export const SignupCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding: 2rem;
  @media ${devices.mobile} {
    flex-direction: column;
  }
`;

export const SignupHeader = styled.div`
  margin-right: 4.5rem;
  margin-top: 4.5rem;
  @media ${devices.mobile} {
    margin-right: 0;
    * {
      text-align: center;
    }
  }
`;

export const SignupForm = styled.form`
  width: 40rem;
  @media ${devices.mobile} {
    width: 100%;
  }
`;

export const SignupBtn = styled(StyledBtn)`
  width: 100%;
`;
