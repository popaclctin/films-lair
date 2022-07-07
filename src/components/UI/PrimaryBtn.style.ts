import styled from 'styled-components';

export const PrimaryBtn = styled.button`
  padding: 0.5rem;
  background-color: var(--clr-accent);
  color: var(--clr-white);
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  &:active {
    background-color: var(--clr-dark);
  }

  &:hover {
    filter: brightness(0.85);
  }

  &:disabled {
    color: var(--clr-dark);
    background-color: var(--clr-light);
  }
`;
