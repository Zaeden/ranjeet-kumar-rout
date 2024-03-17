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
  background-color: ${({ theme }) => theme.card};
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
  width: 40%;
  padding: 0 6px;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  @media screen and (max-width: 1160px) {
    width: 40%;
  }
  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  /* left: 0; */
  right: -100%;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  opacity: ${(props) => (props.isDropdownOpen ? "1" : "0")};
  visibility: ${(props) => (props.isDropdownOpen ? "visible" : "hidden")};
  pointer-events: ${({ isDropdownOpen }) => (isDropdownOpen ? "auto" : "none")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const DropdownItem = styled.span`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

// const ButtonContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: end;
//   width: 50%;
//   height: 100%;
//   padding: 0 6px;

//   @media screen and (max-width: 1104px) {
//     width: 40%;
//   }
//   @media screen and (max-width: 960px) {
//     display: none;
//   }
// `;

// const ContactButton = styled.a`
//   background-color: transparent;
//   text-decoration: none;
//   color: ${({ theme }) => theme.primary};
//   border: 1.8px solid ${({ theme }) => theme.primary};
//   border-radius: 20px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0px 20px;
//   font-size: 1rem;
//   font-weight: 500;
//   cursor: pointer;
//   height: 70%;
//   &:hover {
//     background-color: ${({ theme }) => theme.primary};
//     color: ${({ theme }) => theme.white};
//   }
//   @media screen and (max-width: 800px) {
//     display: none;
//     height: 80px;
//   }
//   @media screen and (max-width: 640px) {
//     font-size: 0.8rem;
//     height: 80px;
//   }
// `;

// const MobileContactButton = styled.a`
//   background: ${({ theme }) => theme.primary};
//   border: 1.8px solid ${({ theme }) => theme.primary};
//   border-radius: 20px;
//   text-decoration: none;
// `;

const Span = styled.span`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  height: 100vh;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  background: ${({ theme }) => theme.card_light};
  background: ${({ theme }) => theme.card};
  transition: all 0.6s ease-in-out;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ open }) => (open ? "100%" : "0")};
  z-index: ${({ open }) => (open ? "1000" : "-1000")};
`;

const MobileMenuLinks = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

const MobileLink = styled.a`
  // border: 1px solid black;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  padding-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
        <MobileIcon>
          <FaBars
            onClick={() => {
              setOpen(!open);
              // console.log(!open);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#">
            <LinkR to="/" style={{ textDecoration: "none", color: "#004c4c" }}>
              About
            </LinkR>
          </NavLink>
          <NavLink href="#">
            <LinkR
              to="/publications"
              style={{ textDecoration: "none", color: "#004c4c" }}
            >
              Publications
            </LinkR>
          </NavLink>

          <NavLink href="#">
            <LinkR
              to="/books"
              style={{ textDecoration: "none", color: "#004c4c" }}
            >
              Books
            </LinkR>
          </NavLink>

          <NavLink href="#">
            <LinkR
              to="/patents"
              style={{ textDecoration: "none", color: "#004c4c" }}
            >
              Patents
            </LinkR>
          </NavLink>

          <NavLink href="#">
            <LinkR
              to="/seminars-workshops"
              style={{ textDecoration: "none", color: "#004c4c" }}
            >
              Seminars & Workshops
            </LinkR>
          </NavLink>

          <NavLink>
            <DropdownContainer onClick={handleToggle}>
              More &#9660;
              <DropdownContent isDropdownOpen={isDropdownOpen}>
                <DropdownItem>
                  <NavLink href="#">
                    <LinkR
                      to="/research-students"
                      style={{ textDecoration: "none", color: "#004c4c" }}
                    >
                      Research Students
                    </LinkR>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>Item 2</DropdownItem>
                <DropdownItem>Item 3</DropdownItem>
              </DropdownContent>
            </DropdownContainer>
          </NavLink>
        </NavItems>
        {/* <ButtonContainer>
          <ContactButton href="#contact">Contact Me</ContactButton>
        </ButtonContainer> */}
      </NavContainer>
      {open && (
        <MobileMenu open={open}>
          <MobileLink
            href="#about"
            onClick={() => {
              setOpen(!open);
            }}
          >
            About
          </MobileLink>
          {/* <MobileLink
            href="#skills"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <IoLaptop /> Skills
          </MobileLink>
          <MobileLink
            href="#experience"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <IoMdBriefcase /> Experience
          </MobileLink>
          <MobileLink
            href="#work"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <AiFillProfile /> My Work
          </MobileLink>
          <MobileLink
            href="#education"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <FaSchool /> Education
          </MobileLink> */}

          <MobileLink
            href="#"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <LinkR
              to="/publications"
              style={{ textDecoration: "none", color: "#004c4c" }}
            >
              Publications
            </LinkR>
          </MobileLink>

          <MobileLink
            href="#"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <LinkR
              to="/books"
              style={{ textDecoration: "none", color: "#004c4c" }}
            >
              Books
            </LinkR>
          </MobileLink>

          <MobileLink
            href="#"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <LinkR
              to="/patents"
              style={{ textDecoration: "none", color: "#004c4c" }}
            >
              Patents
            </LinkR>
          </MobileLink>

          <MobileLink
            href="#"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <LinkR
              to="/seminars-workshops"
              style={{ textDecoration: "none", color: "#004c4c" }}
            >
              Seminars & Workshops
            </LinkR>
          </MobileLink>

          {/* <MobileContactButton
            style={{
              padding: "10px 16px",
              background: `${({ theme }) => theme.primary}`,
              color: "white",
              width: "max-content",
            }}
            href="#contact"
            onClick={() => {
              setOpen(!open);
            }}
          >
            Contact Me
          </MobileContactButton> */}
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;
