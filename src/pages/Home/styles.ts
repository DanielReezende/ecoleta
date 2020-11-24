import styled from 'styled-components';

import backgroundHome from '../../assets/home-background.svg';


export const Container = styled.div`
  height: 100vh;

  background: url(${backgroundHome}) no-repeat 600px bottom;

  @media(max-width: 900px) {
    div div {
      align-items: center;
      text-align: center;
    }

    div div  header {
      margin: 48px auto 0;
    }

    div div  main {
      align-items: center;
    }

    div div  main h1 {
      font-size: 42px;
    }

    div div main p {
      font-size: 24px;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  header {
    margin: 48px 0 0;
  }

  main {
    flex: 1;
    max-width: 560px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 54px;
      color: var(--title-color);
    }

    p {
      font-size: 24px;
      margin-top: 24px;
      line-height: 38px;
    }

    a {
      width: 100%;
      max-width: 360px;
      height: 72px;
      background: var(--primary-color);
      border-radius: 8px;
      text-decoration: none;

      display: flex;
      align-items: center;
      overflow: hidden;

      margin-top: 40px;

      span {
        display: block;
        background: rgba(0, 0, 0, 0.08);
        width: 72px;
        height: 72px;

        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.2s;

        svg {
          color: #FFF;
          width: 20px;
          height: 20px;
        }
      }

      strong {
        flex: 1;
        text-align: center;
        color: #FFF;
      }

      &:hover{
        background: #2FB86E;
      }
    }
  }
`;