import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  ul {
    padding: 0;
  }

  li {
    list-style-type: none;
  }

  h1 {
    text-align: center;
  }

  button {
    display: inline-block;
  }

  .film_details {
    position: relative;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .film_details__rating {
    position: absolute;
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

  .label {
    font-weight: bold;
  }
`;
