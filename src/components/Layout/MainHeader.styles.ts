import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--clr-accent);

  a {
    text-decoration: none;
  }

  nav {
    ul {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 0;
    }

    li {
      color: var(--clr-light);
      list-style-type: none;
    }

    a {
      color: var(--clr-white);

      &:hover {
        text-decoration: underline;
        color: var(--clr-light);
      }

      &:active {
        color: var(--clr-dark);
      }
    }
  }

  .logoutBtn {
    cursor: pointer;
    border: 0;
    background: transparent;

    &:hover {
      text-decoration: underline;
      color: var(--clr-light);
    }

    &:active {
      color: var(--clr-dark);
    }
  }

  h1 {
    font-family: var(--ff-serif);
    color: var(--clr-light);
  }
`;
