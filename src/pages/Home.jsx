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
  overflow: hidden;
`;

// const Wrapper = styled.div`
//   background: linear-gradient(
//       38.73deg,
//       rgba(204, 0, 187, 0.15) 0%,
//       rgba(201, 32, 184, 0) 50%
//     ),
//     linear-gradient(
//       141.27deg,
//       rgba(0, 70, 209, 0) 50%,
//       rgba(0, 70, 209, 0.15) 100%
//     );
//   width: 100%;
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
// `;
const Home = () => {
  return (
    <>
      <Navbar />
      <Body>
        <Hero />
        <Education />
        {/* <Wrapper> */}
        <Skills />
        <Experience />
        {/* <Work /> */}
        {/* </Wrapper> */}
        {/* <Contact /> */}
        <Footer />
      </Body>
    </>
  );
};

export default Home;
