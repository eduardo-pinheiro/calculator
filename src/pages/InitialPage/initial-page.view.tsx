import React from 'react';
import InitialPageWrapper from './initial-page.style';
import { Modal } from '../../components';

interface IProps {
  showModal: boolean;
  onClickToClose: () => void;
  onClickToOpen: () => void;
}

const InitialPageViewNoMemo: React.FC<IProps> = (props) => (
  <InitialPageWrapper className='initial-page-component'>
    <button onClick={props.onClickToOpen}>Abrir modal</button>
    <Modal
      show={props.showModal}
      onClose={props.onClickToClose}
    >
      <h1>Ola mundo!</h1>
    </Modal>
  </InitialPageWrapper>
);

const InitialPageView = React.memo(InitialPageViewNoMemo);
export default InitialPageView;
