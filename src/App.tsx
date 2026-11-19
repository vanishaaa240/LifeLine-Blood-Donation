
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import FindDonors from "./pages/FindDonors";
import RecipientDashboard from "./pages/RecipientDashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recipient-dashboard" element={<RecipientDashboard />} />
        <Route path="/find-donors" element={<FindDonors />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
