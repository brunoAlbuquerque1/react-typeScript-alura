import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import * as S  from './styles'

interface Props {
  tarefas: ITarefa[],
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
}


function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
      <S.ListaTarefas>

      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map(item => (
          <Item
          selecionaTarefa={selecionaTarefa}
          key={item.id}
          {...item}
          />
          ))}
      </ul>
          </S.ListaTarefas>
  )
}

export default Lista;