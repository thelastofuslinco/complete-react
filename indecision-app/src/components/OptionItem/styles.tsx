import styled from 'styled-components'

export const OptionItemContainer = styled.span<{
  $value: number
  $index: number
}>`
  padding: 0.5rem;
  background-color: ${({ $value, $index }) =>
    $value === $index ? '#b3b3b3' : '#d6d6d6'};
  border-radius: 0.5rem;
  max-width: 400px;
  color: ${({ $value, $index }) => $value === $index && 'blue'};

  .icon {
    animation: rotating 1s linear infinite;
  }

  @keyframes rotating {
    to {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`
