import { useState } from 'react'
import './App.css'
import Dropdown from './components/Dropdown'
import Textinput from './components/Textinput'

function App() {
  const numCordasDisponiveis = [6, 7, 8]
  const formatosDisponiveis = ["Stratocaster", "Telecaster", "Les Paul"]

  const [nome, setNome] = useState("John Guitarra")
  const [numCordas, setNumCordas] = useState(numCordasDisponiveis[0])
  const [formato, setFormato] = useState(formatosDisponiveis[6])

  const [imagem, setImagem] = useState(null)

  function handleName(e) {
    setNome(e.target.value)
  }

  function handleNumCordas(e) {
    setNumCordas(e.target.value)
  }

  function handleFormato(e) {
    setFormato(e.target.value)
  }

  return (
    <div>
      <form>
        <Textinput  name="nome" 
                    label="Digite o nome da sua guitarra:" 
                    placeholder="John Guitarra..."
                    onChange={handleName}></Textinput>
                    
        <Dropdown   name="cordas" 
                    label="Escolha o número de cordas:" 
                    items={numCordasDisponiveis}
                    onChange={handleNumCordas}></Dropdown>

        <Dropdown   name="formato" 
                    label="Escolha o formato da guitarra" 
                    items={formatosDisponiveis}
                    onChange={handleFormato}></Dropdown>
      </form>
    </div>
  )
}

export default App
