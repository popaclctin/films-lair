import styled from 'styled-components';

export const Wrapper = styled.section`
  width: min(100%, 25rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
  border: 1px solid var(--clr-light);
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 90%;

    button {
      padding: 0.5rem;
      cursor: pointer;
      background-color: var(--clr-accent);
      color: var(--clr-white);
      border: 0;
      border-radius: 4px;

      &:active {
        background-color: var(--clr-dark);
      }
    }
  }

  .form-input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .toggle {
    background-color: transparent;
    color: var(--clr-black);

    &:hover {
      color: var(--clr-dark);
      text-decoration: underline;
    }

    &:active {
      color: var(--clr-accent);
      background-color: transparent;
    }
  }
`;
