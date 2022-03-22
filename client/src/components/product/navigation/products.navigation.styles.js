import styled from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../../../styles/breakpoints";
import { StyledBtn } from "../../styles/styles/button.styles";

export const SidebarNav = styled.nav`
  min-width: 25rem;
  background-color: #eaeaea;
  min-height: 100vh;

  @media ${devices.laptopL} {
    min-width: 22rem;
  }

  @media ${devices.laptop} {
    max-width: 20rem;
  }

  @media ${devices.mobile} {
    min-height: auto;
    max-width: 100%;
    background-color: #af3858;
    position: relative;
  }
`;

export const SidebarNavLinks = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  margin: 0;
  @media ${devices.mobile} {
    display: none;
    &[open] {
      display: block;
    }
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #af3858;
    padding-left: 0;
  }
`;
export const SidebarLinkCon = styled.li`
  font-size: 1.6rem;
  border-bottom: 2px solid #bbb;
  &:hover {
    background-color: #bbb;
  }

  @media ${devices.mobile} {
    border-bottom: 2px solid #fff;
    &:hover {
      background-color: #af3858;
    }
  }
`;

export const SidebarLink = styled(Link)`
  font-size: 1.6rem;
  color: #666;
  padding: 2rem;
  display: block;
  @media ${devices.mobile} {
    color: #fff;
    /* font-size: 2rem; */
  }
`;

export const SidebarColBtn = styled(StyledBtn)`
  display: none;
  @media ${devices.mobile} {
    display: block;
    width: 100%;
    padding: 2rem;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    span:first-child {
      flex-grow: 1;
    }
  }
`;
