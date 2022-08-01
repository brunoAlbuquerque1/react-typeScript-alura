
import styled from "styled-components";

export const Menu = styled.nav`
     padding: 20px ;
`;

export const Header = styled.div`
    align-items: center;
  background-image: url("/assets/cardapio/header.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  height: 300px;
  padding: 0px $padding-horizontal;
  @media (max-width: $desktop_xsm) {
    padding: 0px $padding-horizontal-mobile;
  }
  @media (min-width: $desktop_xsm) and (max-width: $desktop_sm) {
    padding: 0px $padding-horizontal-sm;
  }
  @media (min-width: $desktop_sm) and (max-width: $desktop_md) {
    padding: 0px $padding-horizontal-md;
  }

`;

export const TextHeader = styled.p`
    padding: 20px;
    color: white;
    font-size: 5rem;
    min-width: 400px;
    width: 40%;
`;


export const Section = styled.div`
   padding: 50px ;
`;
export const CardapioFiltro = styled.div`
   align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 30px;
    width: 100%;
`;