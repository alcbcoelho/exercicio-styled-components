import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
      list-style: none;
  }

  body {
    padding-top: 80px;

    @media screen and (max-width: 767px) {
      padding-top: 16px;
    }
  }
`;

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 767px) {
    max-width: 80%;
    display: block;
  }
`;

export { GlobalStyles, Container };
