import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { NewsProvider } from './context/NewsContext';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import NewsDetailPage from './pages/NewsDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';

// A small component to handle the root redirect logic
const RootRedirector = () => {
  const authContext = React.useContext(AuthContext);
  if (!authContext) {
    return null; // Or a loading spinner, but for now null is fine
  }
  return authContext.isAuthenticated ? <Navigate to="/home" replace /> : <LoginPage />;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NewsProvider>
          <HashRouter>
            <Routes>
              <Route path="/" element={<RootRedirector />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
              <Route path="/article/:id" element={<ProtectedRoute><NewsDetailPage /></ProtectedRoute>} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </HashRouter>
        </NewsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
