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
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.3);

  a {
    text-decoration: none;
  }

  nav {
    width: 100%;
    height: 25%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: var(--clr-dark);

    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      padding: 0;
    }

    li {
      color: var(--clr-light);
      list-style-type: none;
    }

    a {
      display: block;
      color: var(--clr-white);

      &:hover {
        text-decoration: underline;
        color: var(--clr-light);
      }

      &:active {
        color: var(--clr-dark);
      }
    }

    transform: translateY(-100%);
    transition: transform 300ms ease-out;
  }

  //Hamburger menu icon
  .hamb {
    cursor: pointer;
    padding: 1rem;
    z-index: 100;
  }

  .hamb-line {
    background: var(--clr-white);
    display: block;
    height: 2px;
    position: relative;
    width: 24px;
  }

  .hamb-line::before,
  .hamb-line::after {
    background: var(--clr-white);
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: all 200ms ease-out;
  }

  .hamb-line::before {
    top: 5px;
  }

  .hamb-line::after {
    top: -5px;
  }

  .side-menu {
    display: none;
  }

  /* Toggle menu icon */
  .side-menu:checked ~ nav {
    transform: translateY(0);
  }

  .side-menu:checked ~ .hamb .hamb-line {
    background: transparent;
  }

  .side-menu:checked ~ .hamb .hamb-line::before {
    transform: rotate(-45deg);
    top: 0;
  }

  .side-menu:checked ~ .hamb .hamb-line::after {
    transform: rotate(45deg);
    top: 0;
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

  .email {
    color: var(--clr-accent);
    order: -1;
  }

  @media screen and (min-width: 64em) {
    width: var(--default-width);
  }
`;
