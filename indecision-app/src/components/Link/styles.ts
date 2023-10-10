import styled, { css } from 'styled-components'

export const LinkContainer = styled.a<{ $location: boolean }>`
  color: 'blue';

  &:hover {
    font-weight: bold;
  }

  ${(props) =>
    props.$location &&
    css`
      font-weight: bold;
      border-bottom: 1px solid blue;
      padding-left: 0.5rem;
    `}
`
