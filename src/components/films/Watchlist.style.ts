import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 80%;
  margin: 1rem 0;
  text-align: center;

  ul {
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-template-rows: max-content;
    align-items: stretch;
    gap: 2rem;

    /* Desktop: width > 1024px */
    @media screen and (min-width: 64em) {
      grid-template-columns: repeat(3, minmax(15rem, 1fr));
    }

    /* Desktop: width > 1024px */
    @media screen and (min-width: 90em) {
      grid-template-columns: repeat(4, minmax(15rem, 1fr));
    }
  }

  li {
    list-style-type: none;
  }
`;
