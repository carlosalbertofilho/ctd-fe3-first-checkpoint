//Este componente deverá receber dados por Props e mostrar as Informações em Tela


export function Card (props) {

  const checkLightOrDarkColor = (color) => {
    //Convert it to RGB: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
    let r = color >> 16
    let g = (color >> 8) & 255
    let b = color & 255
    let hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b))
        
    return hsp > 127.5
  }
  const styleMod = (cor) => {
    return checkLightOrDarkColor(cor)
      ? {backgroundColor: cor,
        border: "4px solid " + cor,
        color: "black" }
      : {backgroundColor: cor,
        border: "4px solid " + cor }
  }
  return (
    <div className="card"  
    style={ styleMod(props.objCor.codigo) }>
      <span>{props.objCor.nome}</span>
      <h1>{props.objCor.codigo}</h1>
    </div>
  )
}