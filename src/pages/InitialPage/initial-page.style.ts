import { styled, css } from "styled-components";

const InitialPageWrapper = styled.div`${() => css`
  &.initial-page-component{
    .button-to-open-modal {
      height: 50px;
      padding: 0px 30px;
      font-weight: 600;
      font-size: 20px;
      user-select: none;
      cursor: pointer;
    }
  }
`}`;

export default InitialPageWrapper;
