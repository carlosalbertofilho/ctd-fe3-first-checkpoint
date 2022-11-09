//Este componente deverá receber dados por Props e mostrar as Informações em Tela


export function Card (props) {

  const checkColor = (color) => {
    let resp = false
    if (color === '#9a9996'
      || color === '#c0bfbc'
      || color === '#deddda'
      || color === '#f6f5f4'
      || color === '#ffffff') resp = true
    return resp
  }
  const styleMod = (cor) => {
    return checkColor(cor)
      ? {backgroundColor: cor,
        border: "4px solid " + cor,
        color: "black" }
      : {backgroundColor: cor,
        border: "4px solid " + cor }
  }
  return (
    <div className="card" key={props.objCor.id} 
    style={ styleMod(props.objCor.codigo) }>
      <span>{props.objCor.nome}</span>
      <h1>{props.objCor.codigo}</h1>
    </div>
  )
}