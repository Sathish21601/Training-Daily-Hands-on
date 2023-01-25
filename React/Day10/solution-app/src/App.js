import { format } from "date-fns";
import { useRef, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import useAuth from "./utils/useAuth";
import { useTime } from "./utils/utils";
import { Routes, Route, Navigate } from "react-router-dom";
import SolutionsPage from "./pages/SolutionsPage";
import DocsPage from "./pages/DocsPage";
import PricingPage from "./pages/PricingPage";
import CompanyPage from "./pages/CompanyPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PublicPage from "./pages/PublicPage";
import CompanyAbout from "./pages/CompanyAbout";
import CompanyTeam from "./pages/CompanyTeam";
import UserPage from "./pages/UserPage";
import DashboardPage from "./pages/DashboardPage";
import TeamPage from "./pages/TeamPage";
import CalendarPage from "./pages/CalendarPage";
import ProjectPage from "./pages/ProjectPage";
import ReportPage from "./pages/ReportPage";
import DocumentsPage from "./pages/DocumentsPage";
import Require from '../src/pages/Require'

function App() {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicPage />}>
          <Route index element={<HomePage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="docs" element={<DocsPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="company" element={<CompanyPage />}>
            <Route index element={<CompanyAbout />} />
            <Route path="team" element={<CompanyTeam />} />
          </Route>
        </Route>

        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        
          <Route element={<Require />}>
          <Route path="dashboard" element={<UserPage />}>
            <Route index element={<DashboardPage />} />
            <Route path="team" element={<TeamPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="project" element={<ProjectPage />} />
            <Route path="report" element={<ReportPage />} />
            <Route path="documents" element={<DocumentsPage />} />
          </Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;