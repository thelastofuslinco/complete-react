import styled from 'styled-components'

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: auto;
  flex: 1;
`

export const OptionItem = styled.span<{ $value: number; $index: number }>`
  padding: 0.5rem;
  background-color: ${({ $value, $index }) =>
    $value === $index ? '#b3b3b3' : '#d6d6d6'};
  border-radius: 0.5rem;
  max-width: 400px;
  color: ${({ $value, $index }) => $value === $index && 'blue'};
`
