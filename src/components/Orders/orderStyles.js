import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  color: lightblue;
`;

export const Header = styled.h1`
  font-size: 20px;
  font-weight: 500px;
`;

export const ItemContainer = styled.div`
  display: inline-flex;
  padding: 10px;
`;
export const ItemName = styled.p``;
export const ItemStock = styled.p``;
export const ItemButton = styled.button`
  padding: 10px;
  margin: 0 10px;
  background: gray;
`;

export const FormContainer = styled.div`
  display: inline-flex;
  padding: 10px;
`;
export const FormInput = styled.input`
  background: darkgray;
`;
export const FormButton = styled.button`
  margin-left: 10px;
  background: gray;
`;
export const DeleteButton = styled.button`
  margin-left: 10px;
  background: gray;
`;
