import styled from 'styled-components'

export const SidebarContainer = styled.section`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: red;
  height: 100vh;
  width: 150px;
  left: -150px;
  z-index: 1;
  transition: 400ms;

  &::before {
    content: '';
    position: absolute;
    background-color: blue;
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.3);
    padding: 1rem;
    border-radius: 0 0.5rem 0.5rem 0;
    left: 100%;
    top: 1rem;
    cursor: pointer;
  }

  &:hover {
    left: 0;
  }
`
