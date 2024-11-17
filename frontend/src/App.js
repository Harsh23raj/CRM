import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SegmentForm from "./components/SegmentForm";
import CampaignForm from "./components/CampaignForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/segments" element={<SegmentForm />} />
        <Route path="/campaigns" element={<CampaignForm />} />
      </Routes>
    </Router>
  );
}

export default App;
