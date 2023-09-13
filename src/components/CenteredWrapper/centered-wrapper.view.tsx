import React from 'react';
import CenteredWrapperWrapper from './centered-wrapper.style';

interface IProps {
  children?: React.ReactNode;
}

const CenteredWrapperViewNoMemo: React.FC<IProps> = (props) => (
  <CenteredWrapperWrapper className='centered-wrapper-component'>
    <div className='content'>
      {props.children}
    </div>
  </CenteredWrapperWrapper>
);

const CenteredWrapperView = React.memo(CenteredWrapperViewNoMemo);
export default CenteredWrapperView;
