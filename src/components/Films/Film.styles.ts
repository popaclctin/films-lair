import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--clr-light);
  color: var(--clr-black);
  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.3);

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

  .film_poster {
    img {
      object-fit: cover;
      width: 100%;
    }
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
  }

  .film_details__rating_star {
    color: orange;
  }

  .film_details__release_date {
    display: flex;
    gap: 0.25rem;
  }
`;
