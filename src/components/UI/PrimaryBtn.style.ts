import styled from 'styled-components';

export const PrimaryBtn = styled.button`
  padding: 0.5rem;
  flex: 0 0 default;
  cursor: pointer;
  background-color: var(--clr-accent);
  color: var(--clr-white);
  border: 0;
  border-radius: 4px;

  &:active {
    background-color: var(--clr-dark);
  }
`;
