
import styled from "styled-components";


export const Filtro = styled.div`
   display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin: 20px 0;
`;
export const Button = styled.button`
   align-items: center;
    background-color: grey;
    border: none;
    border-radius: 4px;
    display: flex;
    font-size: 1.25rem;
    font-weight: bold;
    height: 40px;
    justify-content: center;
    width: 150px;
    &--ativo {
      background-color: blue;
      color: white;
    }
    &:hover {
      cursor: pointer;
    }
`;
