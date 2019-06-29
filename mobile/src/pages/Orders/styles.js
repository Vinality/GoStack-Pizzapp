import styled from "styled-components";

export const Background = styled.ImageBackground`
  height: 20%;
  flexGrow: 1;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-top: 5px;
  font-size: 20px;
  margin-left: 20px;
`;

export const Header = styled.View`
  margin-top: 60px;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: 10px;
  height: 50px;
  width: 100%;
  height: 70px;
`;

export const OrderList = styled.ScrollView`
  flex: 1;
  margin-left: 25px;
`;
