import styled from "styled-components";
import img from "../../resources/fundo.png";

export const Type = styled.Text`
  /* width: 100%; */
  font-size: 13px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Img = styled.Image`
  height: 130px;
  width: 130px;
`;

export const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px;
  margin-top: 10px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 180px;
  border: 1px solid #e0e1e2;
  box-shadow: 0px 5px 2px #c9cacc;
`;
