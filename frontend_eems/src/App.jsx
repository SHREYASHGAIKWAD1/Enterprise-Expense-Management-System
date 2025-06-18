 
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EmployeeDashboard from './pages/EmployeeDashboard';
import ManagerDashboard from './pages/ManagerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/employee-dashboard"
              element={user?.role === 'Employee' ? <EmployeeDashboard /> : <MainPage />}
            />
            <Route
              path="/manager-dashboard"
              element={user?.role === 'Manager' ? <ManagerDashboard /> : <MainPage />}
            />
            <Route
              path="/admin-dashboard"
              element={user?.role === 'Admin' ? <AdminDashboard /> : <MainPage />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;