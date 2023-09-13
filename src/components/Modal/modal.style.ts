import { styled, css } from "styled-components";

const ModalWrapper = styled.div`${() => css`
  &.modal-component{
    .header {
      display: flex;
      justify-content: end;
      align-items: center;
      padding: 0px 15px;
      background-color: gray;
      height: 70px;
      
      .header__close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        background-color: black;
        color: white;
        user-select: none;
        cursor: pointer;
      }
    }
  }
`}`;

export default ModalWrapper;
