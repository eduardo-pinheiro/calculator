import React from 'react';
import CenteredWrapperView from './centered-wrapper.view';
import ICenteredWrapper from './centered-wrapper.props';

const CenteredWrapper: React.FC<ICenteredWrapper> = (props) => {
  const {
    children,
  } = props;

  return <CenteredWrapperView children={children} />;
};

export default CenteredWrapper;
