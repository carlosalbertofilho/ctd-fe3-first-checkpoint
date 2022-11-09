
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
    event.preventDefault()

    const novaCor = {
      nome: nomeCor
      , codigo: codigoCor
    }

    if (!validacaoCampos()) setError(true)
    else {
      setError(false)
      setListaCores(listaCores => [novaCor, ...listaCores])
      setNomeCor('')
      setCodigoCor('')
    }
  }

  const validacaoCampos = () => {
    return true
  }

  return (
    <div className="App">
     <main  className={error ? 'error' : 'Main'}>
      <h1>ADICIONAR NOVA COR</h1>
      <form onSubmit={event => cadastraCor(event)}>
        <div>
          <label htmlFor="nomeCor">Nome:</label>
          <input type="text" name="nomeCor" value={nomeCor} 
          onChange={event => setNomeCor(event.target.value)} />
        </div>
        <div>
          <label htmlFor="inputCor">Cor:</label>
          <input type="color" name="inputCor" value={codigoCor} 
          onChange={event => setCodigoCor(event.target.value)}/>
        </div>
        <button type="submit">Adicionar</button>
      </form>
      {error && <span>Por favor, verifique os dados inseridos no formulário</span>}
     </main>
     <section className="cardList">
      <h1>CORES FAVORITAS</h1>
        {
          listaCores.map(
            cor => {
              return(
                <Card nome={cor.nome}
                      codigo={cor.codigo} />
              )
            }
          )
        }
     </section>
    </div>
  )
}

export default App