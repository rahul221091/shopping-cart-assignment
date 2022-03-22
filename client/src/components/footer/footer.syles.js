import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const FooterStyles = styled.footer`
  background-color: #eaeaea;
  font-size: 1.6rem;
  padding: 2rem 0;
  @media ${devices.mobile} {
    text-align: center;
  }
`;
