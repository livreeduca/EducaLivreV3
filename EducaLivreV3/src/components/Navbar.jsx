// src/components/Navbar.jsx
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export default function Navbar() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* 👇 SUBSTITUÍMOS O SchoolIcon PELA IMAGEM PNG */}
          <Box
            component="img"
            src="/logo.png"  // 👈 CAMINHO PARA SUA IMAGEM NA PASTA PUBLIC
            alt="Educa Livre"
            sx={{
              display: { xs: 'none', md: 'block' },
              height: 40,
              width: 'auto',
              mr: 1,
            }}
          />
          
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'primary.main',
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            Educa Livre
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button component={Link} to="/" sx={{ my: 2, color: 'text.primary', display: 'block' }}>Início</Button>
            <Button component={Link} to="/escolas" sx={{ my: 2, color: 'text.primary', display: 'block' }}>Escolas</Button>
            <Button component={Link} to="/sobre" sx={{ my: 2, color: 'text.primary', display: 'block' }}>Sobre</Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {currentUser ? (
              <>
                <Button component={Link} to="/perfil" sx={{ color: 'text.primary' }}>Perfil</Button>
                <Button onClick={handleLogout} variant="outlined" sx={{ ml: 1 }}>Sair</Button>
              </>
            ) : (
              <>
                <Button component={Link} to="/login" sx={{ color: 'text.primary' }}>Entrar</Button>
                <Button component={Link} to="/cadastro" variant="contained" sx={{ ml: 1, borderRadius: 4 }}>
                  Cadastrar
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}