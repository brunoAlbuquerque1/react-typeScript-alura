import React from "react";
import { CgSearch } from "react-icons/cg";
import * as S from "./styles";

interface Props {
  busca: string;
  setBusca: React.Dispatch<React.SetStateAction<string>>;
}

export default function Buscador({ busca, setBusca }: Props) {
  return (
    <S.ContainerInput>
      <S.Input
        value={busca}
        onChange={(evento:any) => setBusca(evento.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4C4D5E" />
    </S.ContainerInput>
  );
}