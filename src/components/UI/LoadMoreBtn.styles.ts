import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  font-size: var(--fs-large);
  line-height: 1;

  button {
    width: 100%;
    padding: 0.5rem 0;
    border: 0;
    color: var(--clr-white);
    background-color: var(--clr-accent);

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      color: var(--clr-dark);
      background-color: var(--clr-light);
    }
  }
`;
