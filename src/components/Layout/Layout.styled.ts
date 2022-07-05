import styled from 'styled-components';

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  /* Desktop: width > 1024px */
  @media screen and (min-width: 64em) {
    width: var(--default-width);
  }
`;
