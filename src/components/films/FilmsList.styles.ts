import styled from 'styled-components';

export const Wrapper = styled.ul`
  padding: 0;
  width: 80%;
  text-align: center;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-template-rows: max-content;
  align-items: stretch;
  gap: 2rem;

  li {
    list-style-type: none;
    min-height: 20rem;
    transition: transform 0.3s ease-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
