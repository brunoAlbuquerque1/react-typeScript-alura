import { useState } from "react";
import logo from "../assets/logo.svg";
import * as S from "./styles";
import Buscador from "../components/Buscador";
import Filtros from "../components/Filtros";
import Ordenador from "../components/Ordenador";
import Itens from '../components/Itens';

export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
  return (
    <main>
      <S.Menu>
        <img src={logo} /> 
      </S.Menu>
      <S.Header>
      <S.TextHeader >
          A casa do código e da massa
        </S.TextHeader>
      </S.Header>
      <S.Section>
      <h3 >Cardápio</h3>
      <Buscador busca={busca} setBusca={setBusca} />
      <S.CardapioFiltro>

        <Filtros filtro={filtro} setFiltro={setFiltro} /> 
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </S.CardapioFiltro>
      <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </S.Section>
    </main>
  );
}
