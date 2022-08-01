
import styled from "styled-components";

export const ContainerInput = styled.div`
  align-items: center;
  background-color: grey;
  border-radius: 5px;
  display: flex;
  gap: 18px;
  height: 42px;
  justify-content: space-between;
  padding: 0 15px;
  width: 400px;

`;


export const Input = styled.input`
    background-color: grey;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    outline: none;
    width: 100%;
    &::placeholder {
      color: #fff;
    }
`;
