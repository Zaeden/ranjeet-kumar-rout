import React from "react";
import styled from "styled-components";
import HeroImg from "../../assets/images/hero-image.png";
import { info } from "../../data/constants.js";
import ranjeetcv from "../../assets/pdfs/CV_Ranjeet.pdf";
import Education from "../Education/index.jsx";
import Skills from "../Skills/index.jsx";
import Experience from "../Experience/index.jsx";

import { SiGooglescholar } from "react-icons/si";
import { FaResearchgate } from "react-icons/fa6";

const HeroContainer = styled.div`
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: flex-start;
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

const HeroInnerContainer = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1100px;
  gap: 20px;
  position: relative;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  position: sticky;
  top: 100px;
  align-self: flex-start;
  /* border: 1px solid black; */
  width: 70%;
  order: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 960px) {
    order: 1;
    margin-bottom: 80px;
    justify-content: center;
    align-items: center;
    position: static;
  }

  @media screen and (max-width: 640px) {
    order: 1;
    margin-bottom: 30px;
  }
`;

const HeroRightContainer = styled.div`
  /* border: 1px solid black; */
  width: 100%;
  order: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

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

const Title = styled.div`
  font-size: 50px;
  font-weight: 300;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  margin-bottom: 12px;
  text-align: center;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.black};
  /* color: ${({ theme }) => theme.black + 95}; */
  /* color: ${({ theme }) => theme.text_secondary}; */
  line-height: 32px;
  margin-bottom: 10px;

  @media screen and (max-width: 960px) {
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    font-size: 13px;
    line-height: 24px;
  }
`;

const ResumeButton = styled.a`
  margin-top: 15px;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  padding: 8px 12px;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 400;
  transition: all 0.2s ease-in-out !important;
  background: #333333;

  &:hover {
    background: #222222;
  }
  @media (max-width: 640px) {
    margin-top: 12px;
    font-size: 13px;
  }
`;

const Image = styled.img`
  width: 50%;
  height: 65%;
  position: relative;
  border-radius: 50%;
  margin-bottom: 20px;
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

const PersonalInfo = styled.div`
  padding: 8px;
  color: ${({ theme }) => theme.primary};
`;

const ContactDetails = styled.div`
  padding: 8px;
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
        <HeroInnerContainer>
          <HeroLeftContainer>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                border: "1px solid black",
                paddingTop: "12px",
                borderRadius: "8px",
              }}
            >
              <Image src={HeroImg} alt="hero-image" />
              <PersonalInfo>
                <h1
                  style={{
                    width: "fit-content",
                    textAlign: "center",
                    color: "#111111",
                    fontWeight: "400",
                    marginBottom: "10px",
                    borderBottom: "1px solid grey",
                  }}
                >
                  Ranjeet Kumar Rout
                </h1>
                <ContactDetails>
                  <p style={{ fontSize: "14px" }}>
                    <span style={{ fontWeight: "600" }}>Mobile:</span>{" "}
                    +91-8895125180
                  </p>
                  <p style={{ fontSize: "14px" }}>
                    <span style={{ fontWeight: "600", marginBottom: "20px" }}>
                      Email:
                    </span>{" "}
                    ranjeetkumarrout@gmail.com, ranjeetkumarrout@nitsri.net
                  </p>

                  {/* Google Scholar and Research Gate Profile Links */}

                  <p
                    style={{
                      fontSize: "30px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span>
                      <a
                        href="https://scholar.google.com.my/citations?hl=en&user=UYHadLQAAAAJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Google Scholar Profile"
                        style={{
                          color: "#333333",
                          fontWeight: "600",
                          marginBottom: "20px",
                          marginRight: "20px",
                        }}
                      >
                        <SiGooglescholar />
                      </a>
                    </span>
                    <span>
                      <a
                        href="https://www.researchgate.net/profile/Ranjeet-Rout"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Research Gate Profile"
                        style={{
                          color: "#333333",
                          fontWeight: "600",
                          marginBottom: "20px",
                        }}
                      >
                        <FaResearchgate />
                      </a>
                    </span>
                  </p>

                  <ResumeButton href={ranjeetcv} target="_blank">
                    Check Resume
                  </ResumeButton>
                </ContactDetails>
              </PersonalInfo>
            </div>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Title>About me</Title>
            <SubTitle>{info.bio}</SubTitle>
            <Interest>
              <h1
                style={{
                  textAlign: "center",
                  color: "#222222",
                  fontWeight: "300",
                }}
              >
                Research Interest
              </h1>
              <InterestList style={{ paddingLeft: "200px" }}>
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

            {/* ----------------Education Section----------------- */}
            <Education />

            {/* ----------------Skill Section----------------- */}
            <Skills />

            {/* ----------------Experience Section------------- */}
            <Experience />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;
