// src/pages/Profile.jsx
import { Container, Typography, Paper, Box } from '@mui/material';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { currentUser } = useAuth();
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>Meu Perfil</Typography>
        <Box sx={{ mt: 2 }}>
          <Typography><strong>Email:</strong> {currentUser?.email}</Typography>
          <Typography><strong>Tipo de vínculo:</strong> (Em desenvolvimento)</Typography>
        </Box>
      </Paper>
    </Container>
  );
}