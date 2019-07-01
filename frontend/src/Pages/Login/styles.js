import styled from "styled-components";
import img from "../../resources/fundo.png";

export const Container = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100%;
  position: fixed;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Input = styled.input`
  box-shadow: inset 0 0 1px 1px #888;
  border-radius: 8px;
  width: 250px;
  height: 20px;
  padding: 10px;
  margin-top: 5px;
  border: 15px;
`;

export const Logo = styled.img`
  padding: 10px;
  width: 72px;
  height: 72px;
`;

export const Button = styled.button`
  border-radius: 8px;
  width: 270px;
  padding: 10px;
  background: #ef1c23;
  border: 10px;
  margin-top: 10px;
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  cursor: pointer;
`;
