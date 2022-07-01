import React from 'react';
import { Wrapper } from './LoadingSpinner.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const LoadingSpinner = () => {
  return (
    <Wrapper>
      <FontAwesomeIcon icon={faSpinner} size='lg' spin />
    </Wrapper>
  );
};
