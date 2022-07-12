import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background-color: var(--clr-light);

  /* Desktop: width > 1024px */
  @media screen and (min-width: 64em) {
    flex-direction: row;
  }

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  h1 {
    text-align: center;
  }

  .film_poster {
    flex: 1;
    img {
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }

  .film_details {
    flex: 3;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .film_details__title {
    margin: 0 auto;
  }

  .film_details__tagline {
    margin: 0 auto;
  }

  .film_details__rating {
    position: absolute;
    top: 15%;
    right: 0;
    width: 4.5rem;
    height: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    p {
      z-index: 100;
      color: var(--clr-white);
      font-family: var(--ff-serif);
      font-size: 1.25em;
    }
  }

  .film_details__rating_star {
    position: absolute;
    width: 100%;
    top: 0;
    color: orange;
  }

  .film_details > *:not(button) {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .film_details__genres {
    p {
      display: flex;
      gap: 0.25rem;

      span {
        padding: 0.25rem;
        border: 1px solid var(--clr-accent);
        border-radius: 15px;
      }
    }
  }

  .film_details__overview {
    margin: 1rem 0;
    font-family: var(--ff-serif);
    text-indent: 30px;
  }

  .film_details__addBtn {
    width: 100%;
    /* Desktop: width > 1024px */
    @media screen and (min-width: 64em) {
      width: 10rem;
    }
  }

  .label {
    font-weight: bold;
  }
`;
