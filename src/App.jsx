import React from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./utils/Themes.js";
import Publication from "./components/Publication/index.jsx";
import Book from "./components/Book/index.jsx";
import Patent from "./components/Patent/index.jsx";
import SeminarWorkshop from "./components/SeminarWorkshop/index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ScrollToTop from "./components/ScrollToTop/index.jsx";
import ResearchStudent from "./components/ResearchStudent/index.jsx";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publication />} />
          <Route path="/books" element={<Book />} />
          <Route path="/patents" element={<Patent />} />
          <Route path="/seminars-workshops" element={<SeminarWorkshop />} />
          <Route path="/research-students" element={<ResearchStudent />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
