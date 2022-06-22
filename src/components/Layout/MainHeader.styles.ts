import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--clr-dark);
  padding: 0 10px;

  li {
    color: var(--clr-light);
    list-style-type: none;
  }

  h1 {
    color: var(--clr-light);
  }
`;
