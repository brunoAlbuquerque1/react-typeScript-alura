
import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  background-color: $grey;
  border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  height: 40px;
  justify-content: space-between;
  min-width: 240px;
  padding: 0 40px;
  position: relative;
  &--ativo {
    background-color: $blue;
    color: white;
  }
  &__options {
    display: none;
    position: absolute;
    left: 0;
    flex-direction: column;
    top: 100%;
    width: 100%;
    &--ativo {
      display: flex;
    }
  }
  &__option {
    align-items: center;
    background-color: $grey;
    border-top: 2px solid $light-grey;
    box-sizing: border-box;
    color: $black;
    display: flex;
    height: 40px;
    justify-content: center;
    width: inherit;
    &:hover,
    &--ativo {
      background-color: $blue;
      cursor: pointer;
      color: white;
    }
  }
  
`;




export const Opcoes = styled.div`
 
 align-items: center;
    background-color: $grey;
    border-top: 2px solid $light-grey;
    box-sizing: border-box;
    color: $black;
    display: flex;
    height: 40px;
    justify-content: center;
    width: inherit;
`;
