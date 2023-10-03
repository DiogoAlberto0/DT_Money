import * as Dialog from '@radix-ui/react-dialog'
import * as Radio from '@radix-ui/react-radio-group'

import { styled } from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.75);

  height: 100vh;
  width: 100vw;
  position: fixed;
  inset: 0;
`

export const Content = styled(Dialog.Content)`
  background-color: ${(props) => props.theme['gray-800']};

  min-width: 32rem;
  padding: 2.5rem 3rem;
  border-radius: 6px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    padding: 1.5rem 0;

    input {
      background-color: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-500']};

      border: 0;
      border-radius: 6px;

      padding: 1rem 1rem;
    }

    button[type='submit'] {
      background-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      padding: 1rem 0;

      border: 0;
      border-radius: 6px;

      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
        transition: 0.5s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  background-color: transparent;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  border: none;
  line-height: 0;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme['gray-500']};
  }
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}
export const TransactionType = styled(Radio.Root)`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`
export const TransactionTypeButton = styled(
  Radio.Item,
)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme['gray-700']};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.5rem 0;

  border: 0;
  border-radius: 6px;

  color: ${(props) => props.theme['gray-300']};

  cursor: pointer;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};
    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
