import styled from 'styled-components';

export const Search = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .search-icon {
    position: absolute;
    right: 10px;
    color: var(--clr-dark);
  }

  input[type='text'] {
    width: 100%;
    height: 100%;
    padding: 10px;
    outline: none;
    border: 0;
    border-radius: 10px;
  }
`;
