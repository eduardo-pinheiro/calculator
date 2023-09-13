import React, { useCallback } from 'react';
import ModalView from './modal.view';
import IModal from './modal.props';

const Modal: React.FC<IModal> = (props) => {
  const {
    children,
    show,
    onClose,
  } = props;

  const onClickClose = useCallback(() => {
    if (window.confirm("Realmente quer fechar?")) {
      if (onClose) onClose();
    }
  }, [onClose]);

  return <ModalView
    children={children}
    show={show}
    onClickClose={onClickClose}
  />;
};

export default Modal;
