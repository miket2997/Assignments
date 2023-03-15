import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserProvider";
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicIssueList from "./components/PublicIssueList";


function App() {
  
  const { token, logout } = useContext(UserContext);

  return (
    <div className="app">
       <Navbar logout={logout} token={token} />
       <Routes>
        <Route path="/" element={token ? <Navigate to="/profile" /> : <Auth />} />
        <Route path="/profile" element={<ProtectedRoute token={token} redirectTo="/">
          <Profile />
        </ProtectedRoute>} />
        <Route path="/issues" element={<ProtectedRoute token={token} redirectTo="/">
          <PublicIssueList />
        </ProtectedRoute>} />
       </Routes>
    </div>
  );
}

export default App;

