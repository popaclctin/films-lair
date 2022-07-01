import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;

  list-style-type: none;
  background-color: var(--clr-light);
  color: var(--clr-black);

  a {
    color: inherit;
  }

  a:link {
    text-decoration: none;
  }

  a:hover {
    color: var(--clr-accent);
    text-decoration: underline;
  }

  .film_details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem;
    text-align: left;
  }

  .film_details__rating {
    display: flux;
    align-content: center;
    gap: 0.2rem;
    font-size: var(--fs-medium);
  }

  .film_details__rating_star {
    color: orange;
  }

  .film_details__release_date {
    font-size: var(--fs-medium);
    display: flex;
    gap: 0.25rem;
  }

  /* 
  .film_poster {
    img {
      min-height: 480px;
      object-fit: cover;
    }
  } */
`;
