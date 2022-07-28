import React from 'react';
import * as S  from './styles'

interface Props {
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
  children?: React.ReactNode
}

function Botao({ onClick, type, children }: Props) {
  return (
    <S.Botao
      onClick={onClick}
      type={type}
    >
      {children}
    </S.Botao>
  )
}

export default Botao;