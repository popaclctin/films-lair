import styled from 'styled-components';

export const Search = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 100%;
  order: 3;

  .search-icon {
    position: absolute;
    right: 10px;
    color: var(--clr-dark);
  }

  input[type='text'] {
    width: 100%;
    height: 100%;
    padding: 10px;
    border: 0;
    border-radius: 10px;
    outline-color: var(--clr-dark);
  }
`;
