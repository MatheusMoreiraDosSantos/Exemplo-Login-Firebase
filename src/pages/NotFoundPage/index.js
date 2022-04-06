import React from 'react';
import { Container } from './style';

function NotFoundPage() {
  return (
    <Container>
      <h1>404!</h1>
      <h1>Ops! Página não encontrada.</h1>
      <button onClick={()=>{window.history.back()}}>Voltar</button>
    </Container>
  );
}

export default NotFoundPage;