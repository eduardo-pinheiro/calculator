import React from 'react';
import ModalWrapper from './modal.style';
import { CenteredWrapper } from '../CenteredWrapper';

interface IProps {
  children?: React.ReactNode;
}

const ModalViewNoMemo: React.FC<IProps> = (props) => (
  <ModalWrapper className='modal-component'>
    <CenteredWrapper>
      {props.children}
    </CenteredWrapper>
  </ModalWrapper>
);

const ModalView = React.memo(ModalViewNoMemo);
export default ModalView;
