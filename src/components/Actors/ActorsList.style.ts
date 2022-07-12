import styled from 'styled-components';

export const Wrapper = styled.section`
  flex: 0 0 100%;

  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
  }

  thead th:nth-child(1) {
    width: 15%;

    /* Tablet: width > 480px */
    @media screen and (min-width: 30em) {
      width: 10%;
    }

    /* Laptop: width > 768px */
    @media screen and (min-width: 48em) {
      width: 7%;
    }

    /* Desktop: width > 1024px */
    @media screen and (min-width: 64em) {
      width: 4%;
    }
  }

  thead th:nth-child(2) {
    width: 20%;
  }

  thead th:nth-child(3) {
    width: 5%;
  }

  tbody td {
    text-align: center;
  }

  tbody tr td:last-child {
    text-align: left;
  }

  tbody tr:nth-child(even) {
    background-color: var(--clr-white);
  }

  th,
  td {
    overflow: hidden;
    font-size: 1.1rem;
  }

  td:not(:first-child) {
    padding: 0.5rem;
  }
`;
