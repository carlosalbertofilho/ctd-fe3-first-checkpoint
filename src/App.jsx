
// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente

import { useState } from "react"
import { Card } from "./Card"

function App() {
  // Aqui você irá criar os Estados para manipular os Inputs

  const [nomeCor, setNomeCor] = useState('')
  const [codigoCor, setCodigoCor] = useState('')
  const [error, setError] = useState(false)
  const [listaCores, setListaCores] = useState([])

  const cadastraCor = (event) => {
    event.preventDefault();
    const novaCor = {
      nome: nomeCor
      , codigo: codigoCor
    }

    setListaCores(novaCor, ...listaCores)

  }

  return (
    <div className="App">
     <main>
      <h1>ADICIONAR NOVA COR</h1>
      <form onSubmit={event => cadastraCor(event)}>
        <label htmlFor="nomeCor">Nome:</label>
        <input type="text" name="nomeCor" value={nomeCor} onChange={event => setNomeCor(event.target.value)} />
        <label htmlFor="inputCor">Cor:</label>
        <input type="color" name="inputCor" value={codigoCor} onChange={event => setCodigoCor(event.target.value)}/>
        <button type="submit">Adicionar</button>
      </form>
     </main>
     <section>
      <h1>CORES FAVORITAS</h1>
        {
          listaCores.map(
            cor => {
              console.log(cor)
              return(
                <Card 
                  corData={cor}
                />
              )
            }
          )
        }
     </section>
    </div>
  )
}

export default App