import React, { useState } from "react";
import styled from "styled-components";
import { patents } from "../../data/constants.js";
import PatentCard from "../Cards/PatentCard.jsx";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavbarSecond from "../NavbarSecond/index.jsx";
import FooterSecond from "../FooterSecond/index.jsx";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
  z-index: 1;
  border-radius: 20px;
  align-items: center;
  // margin-top: 100px;
  margin: 10px 0;
  padding: 8px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  @media screen and (max-width: 760px) {
    margin: 10px 0;
  }
`;

const BackButton = styled.button`
  position: absolute;
  left: 16px;
  top: 16px;
  background-color: transparent;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 0px 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 40px;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  
  media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const Span = styled.span`
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  // border: 1px solid black;
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  gap: 12px;
  border: 0.1px solid #854ce6;
  box-shadow: 0px 4px 24px rgba(23, 92, 230, 0.15);
  border-radius: 12px;
  padding: 16px;
  padding-bottom: 48px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 760px) {
    margin-top: 50px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  margin: auto;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

const PatentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  padding: 0 16px;
  margin-top: 20px;
`;

const Patent = () => {
  return (
    <>
      <NavbarSecond />
      <Container id="patents">
        <Wrapper>
          <Link to="/">
            <BackButton>
              <FaCircleArrowLeft style={{ fontSize: "32px" }} />
              <Span>Back to Home</Span>
            </BackButton>
          </Link>
          <Title>Patents</Title>
          <Desc>Highlighting Patents That Define My Research Journey</Desc>
          <PatentsContainer>
            {patents.map((patent) => {
              return <PatentCard key={patent.id} patentDetail={patent} />;
            })}
          </PatentsContainer>
        </Wrapper>
      </Container>
      <FooterSecond />
    </>
  );
};

export default Patent;
