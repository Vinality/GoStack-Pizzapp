import styled from "styled-components";

export const Container = styled.div`
  background-color: #092147;
  height: 65px;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    float: left;
    text-align: center;
    padding: 20px 20px;
    text-decoration: none;
    font-size: 17px;
  }

  img {
    padding: 15px 15px;
    float: left;
  }

  div {
    float: right;

    h1.nome {
      color: #fff;
    }

    h1.logout {
      cursor: pointer;
      color: #adafb2;
    }

  }
`;
