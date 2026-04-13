// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useMemo } from 'react';
import { AuthProvider } from './context/AuthContext';
import { getDesignTokens } from './theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import Profile from './pages/Profile';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SchoolDetail from './pages/SchoolDetail';
import Navbar from './components/Navbar';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => getDesignTokens(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Isso aplica o fundo e cor de texto global automaticamente */}
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/escola/:id" element={<SchoolDetail />} />
            <Route path="/perfil" element={<Profile />} />
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;