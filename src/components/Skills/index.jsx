import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 100px;

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
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-top: 12px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 760px) {
    margin-top: 12px;
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

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100px;
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  border-radius: 12px;
  padding: 18px 36px;
  display: flex;
  align-items: center;
  gap: 18px;
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

const SkillTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  // border: 1px solid black;
`;

// const SkillList = styled.ul`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 12px;
//   margin-bottom: 20px;
// `;

// const SkillItem = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   justify-content: center;
//   font-size: 16px;
//   color: ${({ theme }) => theme.text_primary + 80};
//   border-radius: 12px;
//   border: 1px solid ${({ theme }) => theme.text_primary + 80};
//   padding: 12px 16px;
//   font-weight: 400;

//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 8px 12px;
//   }

//   @media (max-width: 500px) {
//     font-size: 14px;
//     padding: 6px 12px;
//   }
// `;

const SkillLogo = styled.img`
  height: 50px;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
  // border: 1px solid black;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which I have been working for the past
          couple of year.
        </Desc>
        <SkillsContainer>
          {skills.map((item) => {
            return (
              <Skill>
                <SkillLogo src={item.img} />
                <SkillTitle>{item.title}</SkillTitle>
                {/* <SkillList>
                  {item.skills.map((skill) => {
                    return <SkillItem>{skill.name}</SkillItem>;
                  })}
                </SkillList> */}
              </Skill>
            );
          })}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
