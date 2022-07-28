
interface Props {
  tempo: number | undefined
}

export default function Relogio({ tempo = 0 }: Props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
  return (
    <>
      <span >{minutoDezena}</span>
      <span >{minutoUnidade}</span>
      <span >:</span>
      <span >{segundoDezena}</span>
      <span >{segundoUnidade}</span>
    </>
  )
}