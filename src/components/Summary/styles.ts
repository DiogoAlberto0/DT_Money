import { css, styled } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: -5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`
interface SummaryType {
  variant?: 'green'
  iconvariant?: 'green' | 'red'
}
export const SummaryContent = styled.div<SummaryType>`
  background-color: ${(props) => props.theme['gray-600']};
  padding: 2rem;

  border-radius: 6px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) => {
    switch (props.iconvariant) {
      case 'green':
        return css`
          svg {
            color: ${props.theme['green-300']};
          }
        `
      case 'red':
        return css`
          svg {
            color: ${props.theme['red-300']};
          }
        `
      default:
        return css`
          svg {
            color: ${props.theme.white};
          }
        `
    }
  }}

  ${(props) =>
    props.variant === 'green' &&
    css`
      background-color: ${props.theme['green-700']};
    `}
`
