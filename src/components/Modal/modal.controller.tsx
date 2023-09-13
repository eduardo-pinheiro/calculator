import React from 'react';
import ModalView from './modal.view';
import IModal from './modal.props';

const Modal: React.FC<IModal> = (props) => {
  const {
    children,
  } = props;

  return <ModalView children={children} />;
};

export default Modal;
