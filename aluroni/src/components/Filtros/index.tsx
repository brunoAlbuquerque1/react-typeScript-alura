import React from "react";
import filtros from "./filtros.json";
import * as S from "./styles";

type IOpcao = typeof filtros[0];

interface Props {
  filtro: number | null;
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({ filtro, setFiltro }: Props) {

  function selecionarFiltro(opcao: IOpcao) {
    if (filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  }
  return (
    <S.Filtro >
      {filtros.map(opcao => (
        <S.Button >
          {opcao.label}
        </S.Button>
      ))}
    </S.Filtro>
  )
}