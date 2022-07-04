import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 1rem 0;
  width: min(25rem, 80%);
  text-align: center;

  ul {
    padding: 0;
    display: grid;
    place-items: center;
    row-gap: 2rem;
  }

  li {
    list-style-type: none;
  }
`;
