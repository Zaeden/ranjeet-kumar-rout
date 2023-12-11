import React, { useState } from "react";
import styled from "styled-components";
import { publications } from "../../data/constants.js";
import PublicationCard from "../Cards/PublicationCard.jsx";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

console.log(publications);

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  position: relative;
  z-index: 1;
  align-items: center;
  // margin-top: 100px;
  margin: 40px 0;
  padding: 8px;
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

const ToggleButtonGroup = styled.div`
  width: fit-content;
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px auto;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  ${({ active, theme }) =>
    active &&
    `
background: ${theme.primary + 20};
`}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const PublicationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  padding: 0 16px;
`;

const Publication = () => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="skills">
      <Wrapper>
        <Link to="/">
          <BackButton>
            <FaCircleArrowLeft style={{ fontSize: "32px" }} /> Back to Home
          </BackButton>
        </Link>
        <Title>Publications</Title>
        <Desc>
          Here are some of my publicaations for the past couple of year.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />

          {toggle === "journal" ? (
            <ToggleButton
              active
              value="journal"
              onClick={() => setToggle("journal")}
            >
              JOURNAL
            </ToggleButton>
          ) : (
            <ToggleButton value="journal" onClick={() => setToggle("journal")}>
              JOURNAL
            </ToggleButton>
          )}
          <Divider />

          {toggle === "conference" ? (
            <ToggleButton
              active
              value="conference"
              onClick={() => setToggle("conference")}
            >
              CONFERENCE
            </ToggleButton>
          ) : (
            <ToggleButton
              value="conference"
              onClick={() => setToggle("conference")}
            >
              CONFERENCE
            </ToggleButton>
          )}
        </ToggleButtonGroup>

        <PublicationContainer>
          {toggle === "all" &&
            publications.map((publication) => (
              // <ProjectCard
              //   project={project}
              //   openModal={openModal}
              //   setOpenModal={setOpenModal}
              // />
              <>
                <PublicationCard publication={publication} />
                {/* <p>{publication.description}</p> */}
              </>
            ))}
          {publications
            .filter((publication) => publication.category == toggle)
            .map((publication) => (
              <>
                <PublicationCard publication={publication} />
                {/* <p>{publication.description}</p> */}
              </>
            ))}
        </PublicationContainer>
      </Wrapper>
    </Container>
  );
};

export default Publication;
