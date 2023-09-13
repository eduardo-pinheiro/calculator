import React, { useCallback, useState } from 'react';
import InitialPageView from './initial-page.view';
import IInitialPage from './initial-page.props';

const InitialPage: React.FC<IInitialPage> = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickToClose = useCallback(() => {
    setShowModal(false);
  }, []);

  const onClickToOpen = useCallback(() => {
    setShowModal(true);
  }, []);

  return <InitialPageView
    showModal={showModal}
    onClickToClose={onClickToClose}
    onClickToOpen={onClickToOpen}
  />;
};

export default InitialPage;
