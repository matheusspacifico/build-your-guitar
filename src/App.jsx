import './App.css'
import Dropdown from './components/Dropdown'
import Textinput from './components/Textinput'

function App() {

  return (
    <form>
      <Textinput name="nome" label="Digite o nome da sua guitarra:" placeholder="John Guitarra..."></Textinput>
      <Dropdown name="cordas" label="Escolha o número de cordas:" items={[6, 7, 8]}></Dropdown>
    </form>
  )
}

export default App
