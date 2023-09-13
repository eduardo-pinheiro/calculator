import React from 'react';
import ModalWrapper from './modal.style';
import { CenteredWrapper } from '../CenteredWrapper';

interface IProps {
  children?: React.ReactNode;
  show?: boolean;
  onClickClose: () => void;
}

const ModalViewNoMemo: React.FC<IProps> = (props) => (
  <ModalWrapper className='modal-component'>
    {props.show &&
      <CenteredWrapper>
        <div className='header'>
          <div className='header__close-button' onClick={props.onClickClose}>X</div>
        </div>
        {props.children}
      </CenteredWrapper>
    }
  </ModalWrapper>
);

const ModalView = React.memo(ModalViewNoMemo);
export default ModalView;
