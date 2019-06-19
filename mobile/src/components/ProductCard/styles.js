import styled from "styled-components";
import img from "../../resources/fundo.png";

export const Type = styled.Text`
  width: 100%;
  font-size: 13px;
`;

export const Size = styled.Text`
  font-size: 11px;
  color: #706e7b;
`;

export const Img = styled.Image`
  height: 80px;
  width: 80px;
  margin-left: 100px;
`;

export const Info = styled.View`
  margin-left: 20px;
  width: 100%;
  /* flex-direction: column; */
`;

export const TimeDiv = styled.View`
  flex-direction: row;
`;

export const Time = styled.Text`
  font-size: 11px;
  padding: 3px;
  color: #706e7b;
`;

export const Product = styled.TouchableOpacity`
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
