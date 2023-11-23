import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/About/AboutPage.jsx";
import { ContactPage } from "./pages/Contact/ContactPage";
import { ReelPage } from "./pages/Reel/ReelPage";
import { ServicesPage } from "./pages/Services/ServicesPage";
import { StudyPage } from "./pages/Study/StudyPage";
import { HomePage } from "./pages/Home/HomePage.jsx";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" exact element={<AboutPage />} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/reel" exact element={<ReelPage />} />
        <Route path="/services" exact element={<ServicesPage />} />
        <Route path="/study" exact element={<StudyPage />} />
      </Routes>
    </Router>
  );
}
