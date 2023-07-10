import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutMe from "./pages/AboutMe";
import Hobbies from "./pages/Hobbies";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import MainLayout from "./layout/MainLayout";

const MainRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
