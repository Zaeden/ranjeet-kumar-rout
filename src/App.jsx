import React from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes.js";
import Publication from "./components/Publication/index.jsx";
import Book from "./components/Book/index.jsx";
import Patent from "./components/Patent/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import Hero from "./components/HeroSection/index.jsx";
import Skills from "./components/Skills/index.jsx";
import Experience from "./components/Experience/index.jsx";
import Work from "./components/Work/index.jsx";
import Education from "./components/Education/index.jsx";
import Contact from "./components/Contact/index.jsx";
import Footer from "./components/Footer/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

// const Body = styled.div`
//   background-color: ${({ theme }) => theme.bg};
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
// `;

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

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publication />} />
          <Route path="/books" element={<Book />} />
          <Route path="/patents" element={<Patent />} />
        </Routes>

        {/* <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
            <Work />
            <Education />
          </Wrapper>
          <Contact />
          <Footer />
        </Body> */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
