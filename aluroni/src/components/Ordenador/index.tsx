import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import * as S from './styles'
interface Props { 
  ordenador: string,
  setOrdenador: React.Dispatch<React.SetStateAction<string>>
}

export default function Ordenador({
  ordenador,
  setOrdenador
}: Props) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
  return (
    <S.Button
      
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || "Ordenar Por"}</span>
      {aberto ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} /> }
      {aberto &&
      
      <div >
        {opcoes.map(opcao => (
          // <div className={styles.ordenador__option} key={opcao.value} onClick={() => setOrdenador(opcao.value)}>
          <S.Opcoes >
            {opcao.nome}
          </S.Opcoes>
        ))}
      </div>
      }
    </S.Button>
  )
}