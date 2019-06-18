import styled from "styled-components";
import img from "../../resources/fundo.jpg";

export const Container = styled.div`
  display: flex;
  border-radius: 10px;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  margin-bottom: 20px;
  height: 200px;
  padding: 20px;
  box-shadow: 0px 0px 20px #e0e1e2;
`;

export const Title = styled.h1`
  width: 100%;
  border-bottom: 1px solid #d9dce0;
  /* flex-wrap: nowrap; */
`

export const Type = styled.p`
  width: 100%;
  font-size: 13px;
`

export const Total = styled.h1`
  width: 100%;
`

export const Size = styled.p`
  font-size: 11px;
  color: #706e7b;
`

export const Img = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 5px;
`

export const Product = styled.div`
  display: flex;
  padding: 8px;
  margin-top: 15px;
  margin-left: 10px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 80px;
  border: 1px solid #e0e1e2;
`
