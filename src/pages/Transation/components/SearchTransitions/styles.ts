import { styled } from 'styled-components'

export const SearchTransactionsContainer = styled.form`
  display: flex;
  gap: 1rem;
  input {
    flex: 1;

    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};

    border-radius: 6px;
    border: none;

    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;
    border: 2px solid ${(props) => props.theme['green-300']};
    border-radius: 6px;

    color: ${(props) => props.theme['green-300']};
    font-weight: bold;

    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['green-300']};
      color: ${(props) => props.theme.white};
      transition: 0.5s;
    }
  }
`
