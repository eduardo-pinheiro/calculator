import { styled, css } from "styled-components";

const CenteredWrapperWrapper = styled.div`${() => css`
  &.centered-wrapper-component{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000ad;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    .content {
      background-color: white;
      width: 100%;
      max-width: 900px;
      height: calc(100% - 100px);
    }
  }
`}`;

export default CenteredWrapperWrapper;
