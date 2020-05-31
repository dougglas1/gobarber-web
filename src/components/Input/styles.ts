import styled from 'styled-components';

export const Container = styled.div`
  input {
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px; /* Aumentar tamanho do input */
    width: 100%; /* Completar o 340px definido no form */
    color: #F4ede8;

    &::placeholder {
      color: #666360;
    }

    & + input {
      margin-top: 8px;
    }
  }
`;