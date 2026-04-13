// src/theme.js
import { createTheme } from '@mui/material/styles';

// Paleta de cores baseada no seu Figma
const lightPalette = {
  primary: { main: '#1976D2' },
  secondary: { main: '#9C27B0' },
  background: { default: '#F8F9FA', paper: '#FFFFFF' },
  text: { primary: '#1A1A1A', secondary: '#555555' },
};

const darkPalette = {
  primary: { main: '#90CAF9' },
  secondary: { main: '#CE93D8' },
  background: { default: '#121212', paper: '#1E1E1E' },
  text: { primary: '#E0E0E0', secondary: '#AAAAAA' },
};

export const getDesignTokens = (mode) => {
  const palette = mode === 'light' ? lightPalette : darkPalette;
  
  // Criamos o tema base primeiro e depois mesclamos. Isso garante que 'common' exista.
  let theme = createTheme({
    palette: {
      mode,
      ...palette,
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h3: { fontWeight: 700 },
      h5: { fontWeight: 600 },
    },
    shape: { borderRadius: 12 },
  });

  // Ajustes finos pós-criação (opcional)
  theme = createTheme(theme, {
    components: {
      // Exemplo: customizar o botão para ficar mais arredondado
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 24,
            textTransform: 'none',
          },
        },
      },
    },
  });

  return theme;
};