import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;

  .content {
    margin: auto;
    background-color: #fff;
    position: relative;
    padding: 0;
    outline: 0;
    width: 600px;
  }
`

export const Panel = styled.div`
  position: fixed;
  inset: 6rem;
  background-color: #fff;
  outline: 0;
  animation-name: example;
  animation-duration: 300ms;

  @keyframes example {
    from {
      opacity: 0;
      inset: 0;
    }
    to {
      opacity: 1;
      inset: 6rem;
    }
  }

  .close {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    .icon {
      font-size: 2rem;
      color: gray;
      cursor: pointer;
      border-radius: 0.5rem;

      &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        color: black;
      }
    }
  }
`
