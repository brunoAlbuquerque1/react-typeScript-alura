import { ITarefa } from '../../../types/tarefa';
import * as S from './styles'
interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Item(
  {
    tarefa,
    tempo,
    selecionado,
    completado,
    id,
    selecionaTarefa
  }: Props) {

  return (
    <S.ItemContainer
    theme={completado}
      onClick={() => !completado && selecionaTarefa(
        {
          tarefa,
          tempo,
          selecionado,
          completado,
          id
        }
        )}
      >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
  </S.ItemContainer>
  )
}