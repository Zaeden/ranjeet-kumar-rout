import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { IoMdBriefcase } from "react-icons/io";
import { FaSchool } from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";
import { IoLaptop } from "react-icons/io5";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0px 4px 24px rgba(23, 92, 230, 0.15);
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width: fit-content;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screem and (max-width: 640px) {
    padding: 0 0px;
  }
`;

const Span = styled.span`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const NavbarSecond = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "black",
              cursor: "pointer",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Ranjeet Kumar Rout</Span>
          </a>
        </NavLogo>
      </NavContainer>
    </Nav>
  );
};

export default NavbarSecond;
