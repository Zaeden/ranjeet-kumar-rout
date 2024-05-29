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
  margin-top: 40px;
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
  font-size: 35px;
  font-weight: 300;
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
  /* max-width: 400px; */
  max-width: 300px;
  /* height: 100px; */
  height: 70px;
  background-color: ${({ theme }) => theme.card};
  border: 0.1px solid #333333;
  border-radius: 6px;
  padding: 18px 36px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 18px;
  box-shadow: 0px 0px 24px #dddddd;

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
  /* font-size: 22px; */
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
  // border: 1px solid black;
`;

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
        {/* <Desc>
          Here are some of my skills on which I have been working for the past
          couple of year.
        </Desc> */}
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
