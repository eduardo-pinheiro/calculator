import React from 'react';
import InitialPageWrapper from './initial-page.style';
import { CenteredWrapper } from '../../components';

interface IProps { }

const InitialPageViewNoMemo: React.FC<IProps> = () => (
  <InitialPageWrapper className='initial-page-component'>
    <CenteredWrapper><>Ola mundo!</></CenteredWrapper>
  </InitialPageWrapper>
);

const InitialPageView = React.memo(InitialPageViewNoMemo);
export default InitialPageView;
