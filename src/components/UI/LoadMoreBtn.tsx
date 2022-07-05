import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { LoadingSpinner } from './LoadingSpinner';
import { Wrapper } from './LoadMoreBtn.styles';

type Props = {
  isLoading: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
};

export const LoadMoreBtn: React.FC<Props> = ({
  isLoading,
  onClick,
  isDisabled,
}) => {
  return (
    <Wrapper>
      <button disabled={isLoading || isDisabled} onClick={onClick}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div>
            <p>Load More Films</p>
            <FontAwesomeIcon icon={faAngleDown} size='lg' />
          </div>
        )}
      </button>
    </Wrapper>
  );
};
