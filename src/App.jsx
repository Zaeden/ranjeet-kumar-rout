import React from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar/index.jsx";
import Hero from "./components/HeroSection/index.jsx";
import Skills from "./components/Skills/index.jsx";
import Experience from "./components/Experience/index.jsx";
import Education from "./components/Education/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Footer from "./components/Footer/index.jsx";
import { BrowserRouter } from "react-router-dom";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
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
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
            <Education />
          </Wrapper>
          <Contact />
          <Footer />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
