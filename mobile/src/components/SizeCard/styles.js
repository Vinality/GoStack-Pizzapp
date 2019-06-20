import styled from "styled-components";
import img from "../../resources/fundo.png";

export const Size = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  /* width:100%; */
`;

export const Price = styled.Text`
  font-size: 16px;
  color: #0b2031;
`;

export const Img = styled.Image`
  height: 80px;
  width: 80px;
`;

export const FlexCont = styled.View`
  align-items: center;
  width: 100%;
`;

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  margin-top: 10px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  width: 160px;
  height: 180px;
  border: 1px solid #e0e1e2;
  box-shadow: 0px 5px 2px #c9cacc;
`;
