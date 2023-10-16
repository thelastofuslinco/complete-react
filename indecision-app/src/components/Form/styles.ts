import styled from 'styled-components'

export const FormContainer = styled.form<{ $error: boolean }>`
  display: flex;
  position: relative;

  span {
    position: absolute;
    bottom: 100%;
    opacity: 0.5;
    color: red;
  }

  input {
    padding: 0.5rem 1rem;
    flex: 1;
    font-size: 1rem;
    border: 1px solid ${({ $error }) => ($error ? 'red' : 'black')};
    outline: none;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
`
