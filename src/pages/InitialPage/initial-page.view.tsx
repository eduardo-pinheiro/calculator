import React from 'react';
import InitialPageWrapper from './initial-page.style';

interface IProps {}

const InitialPageViewNoMemo: React.FC<IProps> = () => (
  <InitialPageWrapper className='initial-page-component'>
    <h1>InitialPage</h1>
  </InitialPageWrapper>
);

const InitialPageView = React.memo(InitialPageViewNoMemo);
export default InitialPageView;
