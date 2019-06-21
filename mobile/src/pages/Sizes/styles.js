import styled from "styled-components";

export const Background = styled.ImageBackground`
  height: 20%;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 5px;
  font-size: 20px;
  margin-left: 20px;
`

export const Error = styled.Text`
  color: #f44242;
  font-weight: bold;
  margin-top: 20px;
  align-items: center;
  font-size: 20px;
`

export const Header = styled.View`
  margin-top: 160px;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: 50px;
  height: 50px;
  width: 100%;
`

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items:center;
`;

export const SizeList = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  margin-left: 10px;
`;
