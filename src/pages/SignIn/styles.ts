import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh; /* 100% visivel da tela do usuário */

  display: flex;
  align-items: stretch; /* Tamanho total da página (estica) */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center; /* Como se utilizasse co justify-content e align-items no center */
  
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0; /* Distância Top e Bottom */
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    button {
      background: #ff9000;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px; /* Não encostar nas laterais */
      color: #312e38;
      width: 100%;
      font-weight: 500; /* Como se fosse negrito */
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000' )}
      }
    }

    a {
      color: #F4ede8;
      display: block; /* Conseguir utilizar o margin-top */
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#F4ede8' )}
      }
    }
  }

  /* 
  A âncora ">" se refere somente ao conteúdo dentro do content
  e não o conteúdo dentro de outro nível 
  */
  > a {
      color: #ff9000;
      display: block; /* Conseguir utilizar o margin-top */
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      /* Alinhar o icone com o texto */
      display: flex;
      align-items: center;

      svg {
        margin-right: 16px; /* Distanciar item do texto */
      }

      &:hover {
        color: ${shade(0.2, '#ff9000' )}
      }
  }
`;

export const Background = styled.div`
  flex: 1; /* Completa todo espaço com exceção do 700px do Content */
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover; /* Cobrir o conteúdo inteiro */
`;