import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button, Card, Typography, List, Chip } from '@mui/material'; // Ou CSS puro

// Dados mockados (Você pode ter um switch case baseado no ID da URL)
const mockSchool = {
  id: 'escola-modelo',
  name: 'Escola Modelo da ONU',
  address: 'Rua da Igualdade, 123',
  rating: 4.8,
  reviews: [
    { id: 1, user: 'Maria', role: 'Ex-Aluna', text: 'Excelente estrutura e inclusão de gênero nos esportes.', genderEqualityScore: 5 },
    { id: 2, user: 'João', role: 'Professor', text: 'Projetos pedagógicos focados em equidade.', genderEqualityScore: 4 }
  ]
};

export default function SchoolDetail() {
  const { id } = useParams();
  const { currentUser, userRole } = useAuth();
  
  // Lógica para verificar se o usuário pode avaliar
  // Por enquanto, qualquer logado pode, mas na apresentação você explica a regra futura.
  const canReview = !!currentUser; 

  return (
    <div>
      <Typography variant="h3">{mockSchool.name}</Typography>
      <Typography>Nota Geral: {mockSchool.rating}</Typography>
      
      <Typography variant="h5">Avaliações da Comunidade</Typography>
      <List>
        {mockSchool.reviews.map(review => (
          <Card key={review.id}>
            <Typography>{review.user} <Chip label={review.role} size="small" /></Typography>
            <Typography>{review.text}</Typography>
          </Card>
        ))}
      </List>

      {canReview ? (
        <Button variant="contained" onClick={() => alert('Funcionalidade de avaliação em desenvolvimento! (Demonstração de regras de segurança)')}>
          Avaliar como {userRole || 'Usuário'}
        </Button>
      ) : (
        <Button variant="outlined" href="/login">Faça login para avaliar</Button>
      )}
    </div>
  );
}