import styled from "styled-components";

export const Container = styled.View`
  .pedidos {
    font-size: 20px;
    padding: 10px;
  }
`;

export const Background = styled.ImageBackground`
  height: 20%;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.TouchableOpacity`
  background: #f44248;
  border-radius: 20px;
  width: 220px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const Title = styled.Text`
  color: #fff;
  margin-top: 6px;
  margin-left: 10px;
  margin-right: 150px;
  font-weight: bold;
  font-size: 20px;
`;

export const Empty = styled.Text`
  color: #f44242;
  margin-top: 6px;
  font-weight: bold;
  font-size: 20px;
`;

export const Header = styled.View`
  margin-top: 60px;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: 10px;
  height: 50px;
  width: 100%;
  height: 50px;
`;

export const ProductList = styled.View`
  display: flex;
  align-items:center;
`;
