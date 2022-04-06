import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10rem;
  margin-bottom: auto;
  .redefinirSenha {
      margin-top: 10%;
      border: none;
      font-family: Poppins;
      cursor: pointer;
      color: #000;
      :active {
          color: #666;
      }
  }
`;
