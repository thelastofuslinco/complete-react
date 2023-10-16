import styled from 'styled-components'

export const OptionItemContainer = styled.span<{
  $selected: boolean
}>`
  padding: 0.5rem;
  background-color: ${({ $selected }) => ($selected ? '#b3b3b3' : '#d6d6d6')};
  border-radius: 0.5rem;
  max-width: 400px;
  color: ${({ $selected }) => $selected && 'blue'};

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
