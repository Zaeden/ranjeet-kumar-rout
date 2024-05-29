import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar/index.jsx";
import Hero from "../components/HeroSection/index.jsx";
import Skills from "../components/Skills/index.jsx";
import Experience from "../components/Experience/index.jsx";
import Work from "../components/Work/index.jsx";
import Education from "../components/Education/index.jsx";
import Contact from "../components/Contact/index.jsx";
import Footer from "../components/Footer/index.jsx";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  position: relative;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Body>
        <Hero />
        {/* <Education /> */}
        {/* <Wrapper> */}
        {/* <Skills /> */}
        {/* <Experience /> */}
        {/* <Work /> */}
        {/* </Wrapper> */}
        {/* <Contact /> */}
        <Footer />
      </Body>
    </>
  );
};

export default Home;
