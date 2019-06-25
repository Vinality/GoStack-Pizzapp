import styled from "styled-components";

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
  margin-right: 90px;
  font-weight: bold;
  font-size: 20px;
`;

export const Obs = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 0 20px;
  height: 90px;
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
  border: 1px solid #e0e1e2;
  box-shadow: 0px 10px 8px #c9cacc;
`;

export const InputLine = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 0 20px;
  height: 52px;
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
  border: 1px solid #e0e1e2;
  box-shadow: 0px 10px 8px #c9cacc;
`;

export const Street = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  background: #fff;
  border-radius: 10px;
  padding: 0 20px;
  height: 52px;
  width: 200px;
  font-size: 16px;
  color: #333;
  border: 1px solid #e0e1e2;
  box-shadow: 0px 10px 8px #c9cacc;
  margin-bottom: 8px;
`;

export const Number = styled.TextInput.attrs({
  placeholderTextColor: '#999'
})`
  background: #fff;
  border-radius: 10px;
  padding: 0 20px;
  height: 52px;
  width: 100px;
  font-size: 16px;
  color: #333;
  border: 1px solid #e0e1e2;
  box-shadow: 0px 10px 8px #c9cacc;
  margin-bottom: 8px;
`;

export const FormContainer = styled.View`
  padding: 20px;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const StreetContainer = styled.View`
  flex-direction: column;
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
