//Este componente deverá receber dados por Props e mostrar as Informações em Tela

export function Card (props) {
  return (
    <div >
      <h1>{props.nome}</h1>
      <span>{props.codigo}</span>
    </div>
  )
}