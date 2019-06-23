import styled from "styled-components";
import img from "../../resources/fundo.png";

export const Type = styled.Text`
  font-size: 13px;
`;

export const Size = styled.Text`
  font-size: 11px;
  color: #706e7b;
`;

export const Price = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #000;
`;

export const Img = styled.Image`
  height: 80px;
  width: 80px;
`;

export const Info = styled.View`
  margin-left: 10px;
  flex-direction: column;
`;

export const Delete = styled.View`
  margin-left: 50px;
  flex-direction: column;
`;

export const Product = styled.View`
  display: flex;
  flex-direction: row;
  padding: 8px;
  margin-top: 10px;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 100px;
  border: 1px solid #e0e1e2;
  box-shadow: 0px 10px 8px #c9cacc;
`;
