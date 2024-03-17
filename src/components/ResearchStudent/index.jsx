import React from "react";
import styled from "styled-components";
import { researchStudents } from "../../data/constants.js";
import Navbar from "../Navbar/index.jsx";
import Footer from "../Footer/index.jsx";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
  @media screen and (max-width: 760px) {
    margin: 10px 0;
  }
`;

const Wrapper = styled.div`
  max-width: 1100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  width: 100%;
  gap: 12px;
  border: 0.1px solid ${({ theme }) => theme.text_primary};
  box-shadow: 0px 4px 24px rgba(23, 92, 230, 0.15);
  border-radius: 12px;
  padding: 16px;
  padding-bottom: 48px;
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

  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const Span = styled.span`
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 60px;
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

const ResearchStudentContainer = styled.div`
  max-width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Card = styled.div`
  width: calc(50% - 20px);
  margin-bottom: 20px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 1024px) {
    width: calc(50% - 15px);
  }

  @media screen and (max-width: 600px) {
    width: calc(100% - 10px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const Info = styled.div`
  padding: 16px;
`;

const StudentName = styled.h3`
  margin-top: 0;
`;

const ResearchStudentCard = ({ name, researchArea, rollNumber, imageSrc }) => {
  return (
    <Card>
      <CardImage src={imageSrc} alt={name} />
      <Info>
        <StudentName>{name}</StudentName>
        <p>Area of Research: {researchArea}</p>
        <p>Roll Number: {rollNumber}</p>
      </Info>
    </Card>
  );
};

const ResearchStudent = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Link to="/">
            <BackButton>
              <FaCircleArrowLeft style={{ fontSize: "32px" }} />
              <Span>Back to Home</Span>
            </BackButton>
          </Link>
          <Title>Research Students</Title>
          {/* <Desc>Highlighting Patents That Define My Research Journey</Desc> */}
          <ResearchStudentContainer>
            {researchStudents.map((student, index) => (
              <ResearchStudentCard key={index} {...student} />
            ))}
          </ResearchStudentContainer>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};

export default ResearchStudent;
