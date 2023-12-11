import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
    padding-bottom: 40px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 0px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const WorkSection = styled.div`
  // border: 1px solid black;
  width: 100%;
  max-width: 1000px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
`;

const Works = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100px;
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  border-radius: 12px;
  // padding: 18px 36px;
  padding: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // gap: 18px;
  box-shadow: 0px 4px 24px rgba(23, 92, 230, 0.15);

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const WorkTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  // border: 1px solid black;
  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
`;

const WorkDescButton = styled.button`
  background-color: transparent;
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  padding-left: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const Work = () => {
  return (
    <Container id="work">
      <Wrapper>
        <Title>My Work</Title>
        <Desc>Here are some of my work</Desc>
        <WorkSection>
          <Works>
            <WorkTitle>Publications</WorkTitle>
            <Link to="/publications" style={{ textDecoration: "none" }}>
              <WorkDescButton>
                Click Here
                <IoArrowForwardCircle
                  style={{ fontSize: "32px", marginLeft: "8px" }}
                />
              </WorkDescButton>
            </Link>
          </Works>
          <Works>
            <WorkTitle>Books</WorkTitle>
            <Link to="/books" style={{ textDecoration: "none" }}>
              <WorkDescButton>
                Click Here
                <IoArrowForwardCircle
                  style={{ fontSize: "32px", marginLeft: "8px" }}
                />
              </WorkDescButton>
            </Link>
          </Works>
          <Works>
            <WorkTitle>Patents</WorkTitle>
            <Link to="/patents" style={{ textDecoration: "none" }}>
              <WorkDescButton>
                Click Here
                <IoArrowForwardCircle
                  style={{ fontSize: "32px", marginLeft: "8px" }}
                />
              </WorkDescButton>
            </Link>
          </Works>
        </WorkSection>
      </Wrapper>
    </Container>
  );
};

export default Work;
