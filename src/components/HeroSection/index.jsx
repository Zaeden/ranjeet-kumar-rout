import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import HeroImg from "../../assets/images/hero-image.png";
import HeroBgAnimation from "../HeroBgAnimation";
import { info } from "../../data/constants.js";
import ranjeetcv from "../../assets/pdfs/CV_Ranjeet.pdf";

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }

  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }

  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 250px;
  right: 0;
  bottom: 0;
  left: 55%;
  overflow: hidden;
  width: 90%;
  height: 90%;
  padding: 0 30px;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media screen and (max-width: 960px) {
    padding: 0px 0px;
    justify-content: center;
  }
`;

const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const HeroRightContainer = styled.div`
  align-self: flex-start;
  /* border: 1px solid black; */
  width: 70%;
  order: 2;
  display: flex;
  flex-direction: column;
  /* justify-content: end; */
  align-items: center;
  gap: 12px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 960px) {
    order: 1;
    margin-bottom: 80px;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

// const TextLoop = styled.div`
//   font-size: 32px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
//   line-height: 68px;
//   gap: 12px;
//   display: flex;

//   @media screen and (max-width: 960px) {
//     text-align: center;
//   }

//   @media screen and (max-width: 640px) {
//     font-size: 22px;
//     line-height: 48px;
//     margin-bottom: 16px;
//   }
// `;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 500;
  /* color: ${({ theme }) => theme.black + 95}; */
  color: ${({ theme }) => theme.text_secondary};
  line-height: 32px;
  margin-bottom: 42px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 13px;
    line-height: 24px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-apperance: button;
  apperance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  transition: all 0.2s ease-in-out !important;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness();
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  /* border-radius: 50%; */
  /* border-radius: 0 30px 0 0; */
  max-height: 400px;
  max-width: 400px;
  object-fit: cover;
  object-position: center;
  /* border: 2px solid ${({ theme }) => theme.primary}; */

  @media screen and (max-width: 960px) {
    max-height: 400px;
  }
  @media screen and (max-width: 640px) {
    max-height: 280px;
    max-width: 280px;
  }
`;

const Interest = styled.div`
  margin-top: 50px;
  color: ${({ theme }) => theme.primary};
`;

const InterestList = styled.ul``;

const InterestListItem = styled.li`
  &::marker {
    color: ${({ theme }) => theme.primary};
  }
`;

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        {/* <HeroBg>
          <HeroBgAnimation />
        </HeroBg> */}
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br />
              Ranjeet Kumar Rout
            </Title>
            {/* <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: ["Teacher", "Researcher", "Tech Enthusiast"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop> */}
            <SubTitle>{info.bio}</SubTitle>
            {/* <ResumeButton href={ranjeetcv} target="_blank">
              Check Resume
            </ResumeButton> */}
          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src={HeroImg} alt="hero-image" />
            <Interest>
              <h1 style={{ textAlign: "center", color: "#004c4c" }}>
                Research Interest
              </h1>
              <InterestList style={{ paddingLeft: "40px", color: "#008080" }}>
                <InterestListItem>Biometrics</InterestListItem>
                <InterestListItem>Affective computing</InterestListItem>
                <InterestListItem>
                  Emotion Recognition using Explanable Artificial Intelligence
                  (xAI)
                </InterestListItem>
                <InterestListItem>Machine Learning</InterestListItem>
                <InterestListItem>Deep Learning</InterestListItem>
                <InterestListItem>Cyber-Physical Systems</InterestListItem>
              </InterestList>
            </Interest>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
