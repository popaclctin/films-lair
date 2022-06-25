import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { Wrapper } from './LoadMoreBtn.styles';

type Props = {
  isLoading: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const LoadMoreBtn: React.FC<Props> = ({ isLoading, onClick }) => {
  return (
    <Wrapper>
      <button disabled={isLoading} onClick={onClick}>
        {isLoading ? <LoadingSpinner /> : 'Load More Films'}
      </button>
    </Wrapper>
  );
};
