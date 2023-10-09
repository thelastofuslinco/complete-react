import styled, { css } from 'styled-components'

export const NavigationContainer = styled.ul`
  position: fixed;
  width: 70px;
  height: 70px;
  background-color: #212532;
  box-shadow: 0 1px 1px #00000033;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 500ms;
  left: 2rem;
  bottom: 2rem;
  list-style-type: none;

  &.active {
    left: 4rem;
    bottom: 4rem;
    width: 150px;
    height: 150px;
  }
`

export const NavigationItem = styled.button<{ $location?: string }>`
  position: absolute;
  width: 2rem;
  height: 2rem;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: slateblue;
  background-color: #03060fe8;
  box-shadow: 0 1px 1px #00000033;
  border-radius: 50%;
  transition: 500ms;
  left: calc(50% - 1rem);
  top: calc(50% - 1rem);
  border: none;
  cursor: pointer;

  &.active {
    ${(props) => css`
      ${props.$location}
      &:hover {
        color: red;
        width: 2.25rem;
        height: 2.25rem;
      }

      &:active {
        color: green;
        width: 2rem;
        height: 2rem;
      }
    `}
  }
`
