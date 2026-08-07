import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/About/AboutPage.jsx";
import { ContactPage } from "./pages/Contact/ContactPage";
import { ReelPage } from "./pages/Reel/ReelPage";
import { ServicesPage } from "./pages/Services/ServicesPage";
import { StudyPage } from "./pages/Study/StudyPage";
import { StudyInProgressPage } from "./pages/StudyInProgress/StudyInProgressPage";
import { PostProductionPage } from "./pages/PostProduction/PostProductionPage";
import { VFXPage } from "./pages/VFX/VFXPage";
import { HomePage } from "./pages/Home/HomePage.jsx";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound.jsx";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/reels" exact element={<ReelPage />} />
        <Route path="/services" exact element={<ServicesPage />} />
        <Route path="/services/post-production" exact element={<PostProductionPage />} />
        <Route path="/services/vfx" exact element={<VFXPage />} />
        <Route path="/study" exact element={<StudyPage />} />
        <Route path="/study-in-progress" exact element={<StudyInProgressPage />} />
        <Route path="*" exact element={<PageNotFound />} />
      </Routes>
      <ScrollToTopButton />
    </Router>
  );
}
