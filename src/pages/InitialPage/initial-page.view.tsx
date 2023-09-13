import React from 'react';
import InitialPageWrapper from './initial-page.style';
import { Modal } from '../../components';

interface IProps { }

const InitialPageViewNoMemo: React.FC<IProps> = () => (
  <InitialPageWrapper className='initial-page-component'>
    <Modal
      show={true}
    >
      <h1>Ola mundo!</h1>
    </Modal>
  </InitialPageWrapper>
);

const InitialPageView = React.memo(InitialPageViewNoMemo);
export default InitialPageView;
