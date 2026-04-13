// src/pages/Home.jsx
import { Container, Typography, TextField, InputAdornment, Button, Grid, Card, CardContent, CardMedia, Box, Rating } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link } from 'react-router-dom';

// Dados Mockados (Exatamente como nos seus Cards do Figma)
const escolasDestaque = [
  { id: 1, nome: 'Fatec Matão – Luiz Marchesan', cidade: 'Matão, SP', imagem: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/fatec-matao.jpg', nota: 4.9 },
  { id: 2, nome: 'Fatec São Carlos', cidade: 'São Carlos, SP', imagem: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/fatec-sao-carlos.jpg', nota: 4.8 },
  { id: 3, nome: 'Fatec Araraquara – Prof. José Arana Varela', cidade: 'Araraquara, SP', imagem: 'https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/1/2020/10/fatec-araraquara.jpg', nota: 4.5 },
];

export default function Home() {
  return (
    <>
      {/* Hero Section (Exatamente como no Figma) */}
      <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" color="text.primary" gutterBottom>
            Encontre a escola ideal para o futuro do seu filho
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Dados do IBGE e avaliações da comunidade em um só lugar.
          </Typography>
          
          {/* Campo de Busca Estilizado */}
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Nome da escola ou cidade..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
                sx: { borderRadius: 4, bgcolor: 'background.paper' }
              }}
              sx={{ maxWidth: 500, mr: 1 }}
            />
            <Button variant="contained" size="large" sx={{ borderRadius: 4, px: 4 }}>
              Buscar
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Seção Escolas em Destaque */}
      <Container sx={{ py: 6 }} maxWidth="lg">
        <Typography variant="h4" color="text.primary" gutterBottom>
          Escolas em Destaque
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Baseado nas melhores avaliações da nossa comunidade.
        </Typography>
        
        <Grid container spacing={4}>
          {escolasDestaque.map((escola) => (
            <Grid item key={escola.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 4 }}>
                <CardMedia component="img" height="160" image={escola.imagem} alt={escola.nome} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <VerifiedIcon color="primary" fontSize="small" sx={{ mr: 0.5 }} />
                    <Typography variant="caption" color="primary">Verificada</Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>{escola.nome}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <LocationOnIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
                    <Typography variant="body2" color="text.secondary">{escola.cidade}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Rating value={escola.nota} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                      {escola.nota}
                    </Typography>
                  </Box>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button component={Link} to={`/escola/${escola.id}`} fullWidth variant="outlined" sx={{ borderRadius: 2 }}>
                    Ver detalhes
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      {/* Rodapé Simples (Como no Figma) */}
      <Box sx={{ bgcolor: 'background.paper', p: 4, mt: 4, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          © 2025 Educa Livre. Todos os direitos reservados.
        </Typography>
      </Box>
    </>
  );
}