import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  margin: 0 auto;
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

  .logo {
    transition: transform 0.3s ease-out;
  }

  .logo:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 64em) {
    width: var(--default-width);
  }
`;
