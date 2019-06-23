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

export const Title = styled.Text`
  color: #fff;
  margin-top: 6px;
  margin-left: 10px;
  margin-right: 150px;
  font-weight: bold;
  font-size: 20px;
`
export const Empty = styled.Text`
  color: #f44242;
  margin-top: 6px;
  font-weight: bold;
  font-size: 20px;
`

export const Header = styled.View`
  margin-top: 60px;
  justify-content: flex-start;
  flex-direction: row;
  margin-left: 10px;
  height: 50px;
  width: 100%;
  height: 70px;
`

export const ProductList = styled.View`
  display: flex;
  justify-content: center;
  align-items:center;
`;
