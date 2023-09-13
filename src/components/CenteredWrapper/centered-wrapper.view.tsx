import React from 'react';
import CenteredWrapperWrapper from './centered-wrapper.style';

interface IProps {}

const CenteredWrapperViewNoMemo: React.FC<IProps> = () => (
  <CenteredWrapperWrapper className='centered-wrapper-component'>
    <h1>CenteredWrapper</h1>
  </CenteredWrapperWrapper>
);

const CenteredWrapperView = React.memo(CenteredWrapperViewNoMemo);
export default CenteredWrapperView;
