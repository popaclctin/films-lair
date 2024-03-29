import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* ------------------- */
    /*  Custom properties  */
    /* ------------------- */
    :root {
      /* Mobile */
      /* Colors */
      --clr-dark: #3E4147;
      --clr-light: #eaecef;
      --clr-accent: #cc4425;
      --clr-white: #fff;
      --clr-black: #000;
      
      /* Font sizes */
      --fs-small: 1rem;
      --fs-medium: 1.25rem;
      --fs-large: 1.75rem;

      /* Font families */
      --ff-sans: 'Oswald', sans-serif;
      --ff-serif: 'Arvo', serif;

      --default-width: 80%;

    /* Tablet: width > 480px */
    @media screen and (min-width: 30em) {
      /* --fs-large: 2rem; */
    }

    /* Laptop: width > 768px */
    @media screen and (min-width: 48em) {
      
    }

      /* Desktop: width > 1024px */
    @media screen and (min-width: 64em) {
      
    }
    }

    /* ------------------- */
    /*      CSS Reset      */
    /* ------------------- */

      /* Box sizing rules */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    /* Remove default margin */
    body,
    h1,
    h2,
    h3,
    h4,
    p,
    figure,
    blockquote,
    dl,
    dd {
      margin: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
      list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
      scroll-behavior: smooth;
    }

    /* Set core body defaults */
    body {
      min-height: 100vh;
      text-rendering: optimizeSpeed;
      line-height: 1.5;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
      text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
      max-width: 100%;
      display: block;
    }

    /* Inherit fonts for inputs and buttons */
    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
      html:focus-within {
      scroll-behavior: auto;
      }
      
      *,
      *::before,
      *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }

    body {
      font-family: var(--ff-sans);
    }

    h1 {
      line-height: 1.1;
      font-size: 2rem;
    }

    p {
      font-size: inherit;
    }
`;
